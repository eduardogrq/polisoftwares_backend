import applications from "../data/applications.json" assert { type: "json" };

const getApplications = (req, res) => {
  const updatedApplications = applications.map((application) => ({
    ...application,
    icon: `ic_${application.id}.svg`,
  }));

  res.json(updatedApplications);
};

const getApplicationsByName = (req, res) => {
  const { name } = req.query;

  if (!name) {
    return res.status(400).json({ error: "Name query param is required" });
  }

  const matchingApplications = applications
    .filter((application) =>
      application.name.toLowerCase().includes(name.toLowerCase())
    )
    .map((application) => ({
      ...application,
      icon: `ic_${application.id}.svg`,
    }));

  res.json(matchingApplications);
};

export { getApplications, getApplicationsByName };
