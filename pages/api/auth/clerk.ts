import { clerkApi } from "@clerk/nextjs/edge-middleware";

export default (req, res) =>
  clerkApi.clients
    .getClientList()
    .then((clients) => {
      res.status(200).json(clients);
    })
    .catch((error) => {
      res.status(500).json({ error });
    });
