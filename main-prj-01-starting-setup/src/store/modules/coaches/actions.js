export default {
    async registerCoach(context, data) {
        const userId = context.rootGetters.userId;

        const coach = {
            firstName: data.firstName,
            lastName: data.lastName,
            description: data.description,
            hourlyRate: data.rate,
            areas: data.areas
        }

        const response = await fetch(
            `https://learning-vuejs-arno85-default-rtdb.firebaseio.com/coaches/${userId}.json`,
            {
                method: 'PUT',
                body: JSON.stringify(coach)
            }
        );

        if (!response.ok) {
            throw new Error('Failed to register!');
        }

        context.commit('registerCoach', {
            ...coach,
            id: userId
        });
    },

    async loadCoaches(context, payload) {
        if (!payload.forceRefresh && !context.getters.shouldUpdate) {
            return;
        }

        const response = await fetch(
            `https://learning-vuejs-arno85-default-rtdb.firebaseio.com/coaches.json`,
        );

        if (!response.ok) {
            throw new Error('Failed to fetch coaches!');
        }

        const responseData = await response.json();

        const coaches = [];
        for (const key in responseData) {
            const coach = {
                id: key,
                firstName: responseData[key].firstName,
                lastName: responseData[key].lastName,
                description: responseData[key].description,
                hourlyRate: responseData[key].hourlyRate,
                areas: responseData[key].areas
            }

            coaches.push(coach);
        }

        context.commit('setCoaches', coaches);
        context.commit('setFetchTimestamp');
    }
}