export async function saveConcept(concept) {
  const res = await fetch("/api/concepts", {
    method: "POST",
    body: JSON.stringify(concept),
  });

  if (!res.ok) {
    throw new Error(res.statusText);
  }

  return await res.json();
}

export async function deleteConcept(id) {
  const res = await fetch(`/api/concepts/${id}`, {
    method: "DELETE",
  });

  if (!res.ok) {
    throw new Error(res.statusText);
  }
}

export async function updateConcept(id, concept) {
  const res = await fetch(`/api/concepts/${id}`, {
    method: "PUT",
    body: JSON.stringify(concept),
  });

  if (!res.ok) {
    throw new Error(res.statusText);
  }

  return await res.json();
}
