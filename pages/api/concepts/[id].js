import prisma from "../../../client";

export default async function handler(req, res) {
  switch (req.method) {
    case "PUT":
      const conceptData = JSON.parse(req.body);

      const { displayName, alternativeNames, description, parents, children } =
        conceptData;

      const parentIds = parents.map((val) => ({ id: val.id }));
      const childrenIds = children.map((val) => ({ id: val.id }));

      const concept = await prisma.concept.update({
        where: { id: Number(req.query.id) },
        data: {
          displayName,
          alternativeNames,
          description,
          parents: { set: parentIds },
          children: { set: childrenIds },
        },
      });

      res.status(200).json(concept);
      break;

    case "DELETE":
      const { id } = req.query;
      try {
        await prisma.concept.delete({
          where: {
            id: Number(id),
          },
        });
        res.status(204).end();
      } catch (err) {
        console.log(err);
      }
      break;

    default:
      res.status(405);
      break;
  }
}
