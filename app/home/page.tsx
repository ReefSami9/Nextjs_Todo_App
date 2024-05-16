'use client'
import Todo from "./components/Todo";
import UsersList from "./components/users-list";

export default function Home() {
      return (
            <div className="flex flex-1 flex-col gap-y-9">
                  <Todo />
                  <UsersList />
            </div>
      );
}