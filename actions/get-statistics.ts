"use server";

export async function getStatistics() {
  return {
    clients: 15084,
    moderated: 5939,
    networks: 116718,
    mitigated: 2384,
  };
}