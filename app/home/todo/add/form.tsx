'use client'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import React from 'react';
import { useForm } from 'react-hook-form'
import { addTodo, removeTodo, toggleTodo } from "@/app/store/todos";
import { AppDispatch, RootState } from "@/app/store/store";
import { useDispatch, useSelector } from "react-redux";
import type { FieldValues, SubmitHandler } from 'react-hook-form'

const FormSchema = z.object({
      id: z.string(),
      name: z.string().min(6).max(255),
      done: z.boolean()
})
type FormValues = z.infer<typeof FormSchema>

export function Todos({
      mode = 'add',
      formData,
}: {
      formData?: FormValues
      mode?: 'edit' | 'add'
}) {
      const todoList = useSelector((state: RootState) => state.todoReducer.list);
      const dispatch = useDispatch<AppDispatch>();
      const [todo, setTodo] = React.useState("");

      const form = useForm({
            resolver: zodResolver(FormSchema),
      })

      const onSubmit: SubmitHandler<FieldValues> = () => {
            dispatch(
                  addTodo({
                        id: Date.now(),
                        name: todo,
                        done: false,
                  })
            );
            setTodo("");
      }

      const handleDelete = (id: number) => {
            dispatch(removeTodo(id));
      };

      const handleToggle = (id: number) => {
            dispatch(toggleTodo(id));
      };

      return (
            <div className="flex min-h-full flex-1 flex-col justify-center lg:px-8">
                  <div className="sm:mx-auto sm:w-full sm:max-w-sm">
                        <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-zinc-900">
                              Add a new task                        </h2>
                  </div>
                  <div className=" md:mx-auto md:w-full md:max-w-md bg-white shadow-lg rounded ">
                        <form onSubmit={form.handleSubmit(onSubmit)} className="px-8 pt-6 pb-8
                         space-y-6">
                              <label
                                    className="block
                                    text-sm font-bold text-gray-700"
                                    htmlFor="taskTitle"
                              >
                                    Task Title
                              </label>
                              <input
                                    className="block mb-2 w-full max-w-lg px-3 py-2 text-sm leading-tight text-gray-700 border rounded appearance-none focus:outline-none focus:shadow-outline"
                                    id="name"
                                    type="text"
                                    placeholder="Enter Your Task"
                                    onChange={(e) => setTodo(e.target.value)}
                                    value={todo}
                              />
                              <div className="mb-2 text-center">
                                    <button
                                          className="w-full px-4 py-2 font-bold text-white bg-cyan-700 rounded-full hover:bg-cyan-900 focus:outline-none focus:shadow-outline"
                                          type="submit"
                                    >
                                          Add Task
                                    </button>
                              </div>
                        </form>
                        <div className=" md:mx-auto md:w-full md:max-w-md bg-white shadow-lg rounded ">
                              {todoList.map((todo) => {
                                    return (
                                          <div key={todo.id} className="flex">
                                                <input
                                                      type="checkbox"
                                                      checked={todo.done}
                                                      onChange={() => handleToggle(todo.id)}
                                                />
                                                {todo.name}

                                                <button onClick={() => handleDelete(todo.id)} className="ml-auto">
                                                      🗑️
                                                </button>
                                          </div>
                                    );
                              })}
                        </div>
                  </div>
            </div>
      );
}

export default Todos;