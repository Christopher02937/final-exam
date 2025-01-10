import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export default async function TodoList({ userId }: { userId: string }) {
	const todos = await prisma.todoItem.findMany({
		where: { userId },
		orderBy: { createdAt: "desc" },
	});

	return (
		<ul className="space-y-2">
			{todos.map((todo) => (
				<li
					key={todo.id}
					className="flex items-center space-x-4 bg-white shadow rounded-lg px-4 py-2"
				>
					<div>
						<h3 className="text-sm   font-semibold">{todo.title}</h3>
						<p className="text-muted-foreground text-xs"><strong>Note: </strong>{todo.description}</p>
					</div>
				</li>
			))}
		</ul>
	);
}
