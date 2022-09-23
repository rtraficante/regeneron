import prisma from "../../../client";

export default async function handler(req, res) {
  switch (req.method) {
    case "POST":
      const conceptData = JSON.parse(req.body);

      const { displayName, alternativeNames, description, parents, children } =
        conceptData;

      const parentIds = parents.map((val) => ({ id: val.id }));
      const childrenIds = children.map((val) => ({ id: val.id }));

      const savedConcept = await prisma.concept.create({
        data: {
          displayName,
          alternativeNames,
          description,
          parents: { connect: parentIds },
          children: { connect: childrenIds },
        },
      });
      res.status(201).json(savedConcept);
      break;

    case "GET":
      const concepts = await prisma.concept.findMany();
      res.status(200).json(concepts);

    default:
      res.status(405);
      break;
  }
}
