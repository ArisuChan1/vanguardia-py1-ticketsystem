import type Ticket from "../types/ticket";

function randomDate() {
  const today = new Date();
  const pastDate = new Date(
    today.getTime() - Math.random() * 30 * 24 * 60 * 60 * 1000
  );
  return pastDate;
}

// Array para almacenar los tickets
export const tickets: Ticket[] = [];

// Crear 10 tickets de ejemplo
for (let i = 1; i <= 10; i++) {
  const randomUser = ["Miguel", "Juan", "Pedro", "Luis", "Ana"][
    Math.floor(Math.random() * 5)
  ];

  const randomAssignedUser = ["Alicia", "María", "Sofía", "Lucía", "Carlos"][
    Math.floor(Math.random() * 5)
  ];

  const randomPriority = ["low", "medium", "high"][
    Math.floor(Math.random() * 3)
  ] as "low" | "medium" | "high";
  const randomStatus = ["open", "in_progress", "resolved"][
    Math.floor(Math.random() * 3)
  ] as "open" | "in_progress" | "resolved";
  const ticket: Ticket = {
    id: i,
    title: `Ticket ${i}`,
    principalImage: `https://source.unsplash.com/200x100?ticket,${i}`,
    description: `Descripción detallada del Ticket ${i} de ejemplo. Este ticket fue creado por ${randomUser} y asignado a ${randomAssignedUser}. El estado del ticket es ${randomStatus} y tiene prioridad ${randomPriority}.`,
    priority: randomPriority,
    status: randomStatus,
    createdBy: randomUser,
    assignedTo: randomAssignedUser,
    createdAt: randomDate(),
    updatedAt: randomDate(),
    images: [
      `https://source.unsplash.com/400x300/?ticket,${i}`,
      `https://source.unsplash.com/400x300/?ticket,${i + 1}`,
      `https://source.unsplash.com/400x300/?ticket,${i + 2}`,
    ],
  };
  tickets.push(ticket);
}
