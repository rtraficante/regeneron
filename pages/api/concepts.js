import prisma from "../../client";

export default handler = async (req, res) => {
  switch (req.method) {
    case "POST":
      const conceptData = JSON.parse(req.body);
      console.log(req.body);
      const savedConcept = await prisma.concept.create({
        data: conceptData,
      });
      res.status(204).json(savedConcept);
      break;

    case "GET":
      const concepts = await prisma.concept.findMany();
      res.status(200).json(concepts);

    default:
      res.status(405).end(`Method ${req.method} Not Allowed`);
      break;
  }
};
