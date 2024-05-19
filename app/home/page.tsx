'use client'
import UsersList from "./components/users-list";
import Todolist from './components/todos'

export default function Home() {
      return (
            <div className="flex flex-1 flex-col gap-y-9">
                  <Todolist />
                  <UsersList />
            </div>
      );
}