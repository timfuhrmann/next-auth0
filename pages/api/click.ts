import { withApiAuthRequired } from '@auth0/nextjs-auth0';

export default withApiAuthRequired(function Click(req, res) {
    try {
        res.status(200).end();
    } catch (error) {
        console.error(error)
        res.status(error.status || 500).end(error.message)
    }
});
