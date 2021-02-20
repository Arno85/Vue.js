export default {
    async addRequest(context, data) {
        const newRequest = {
            email: data.email,
            message: data.message
        }

        const response = await fetch(
            `https://learning-vuejs-arno85-default-rtdb.firebaseio.com/requests/${data.coachId}.json`,
            {
                method: 'POST',
                body: JSON.stringify(newRequest)
            }
        )

        if (!response.ok) {
            throw new Error('Failed to send request!');
        }

        const responseData = await response.json();
        newRequest.id = responseData.name;
        newRequest.coachId = data.coachId;

        context.commit('addRequest', newRequest);
    },

    async fetchRequests(context) {
        const coachId = context.rootGetters.userId;

        const response = await fetch(
            `https://learning-vuejs-arno85-default-rtdb.firebaseio.com/requests/${coachId}.json`
        )

        if (!response.ok) {
            throw new Error('Failed to fetch requests!');
        }

        const responseData = await response.json();

        const requests = [];
        for (const key in responseData) {
            const request = {
                id: key,
                coachId,
                email: responseData[key].email,
                message: responseData[key].message,
            }

            requests.push(request);
        }

        context.commit('setRequests', requests);
    }
}