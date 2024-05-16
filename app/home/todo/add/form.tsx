'use client'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import { useCallback, useEffect, useState } from 'react'
import { FieldValues, SubmitHandler, useForm } from 'react-hook-form'

const FormSchema = z.object({
      taskTitle: z.string({
            required_error: 'المهمة مطلوبة',
      }).min(3).max(50),
      taskDescription: z.string().min(3).max(120),
      completed: z.boolean()
})

type FormValues = z.infer<typeof FormSchema>

export function AddTask({
      mode = 'add',
      formData,
}: {
      formData?: FormValues
      mode?: 'edit' | 'add'
}) {
      const [todos, setTodos] = useState<any[]>([])
      const form = useForm<z.infer<typeof FormSchema>>({
            resolver: zodResolver(FormSchema),
      })

      return (
            <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
                  <div className="sm:mx-auto sm:w-full sm:max-w-sm">
                        <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-zinc-900">
                              Add a new task                        </h2>
                  </div>
                  <div className=" md:mx-auto md:w-full md:max-w-md">
                        <form className="px-8 pt-6 pb-8
                         space-y-6">
                              <label
                                    className="block
                                    text-sm font-bold text-gray-700"
                                    htmlFor="taskTitle"
                              >
                                    Task Title
                              </label>
                              <input
                                    className="block mb-6 w-full max-w-lg px-3 py-2 text-sm leading-tight text-gray-700 border rounded appearance-none focus:outline-none focus:shadow-outline"
                                    id="taskTitle"
                                    type="text"
                                    placeholder="Task Title"
                              />
                              <label
                                    className="block
                                    text-sm font-bold text-gray-700"
                                    htmlFor="taskDescription"
                              >
                                    Task Description
                              </label>
                              <textarea
                                    className="block w-full min-h-[8rem] max-w-lg mb-6 text-sm leading-tight text-gray-700 border rounded px-3 py-2 appearance-none focus:outline-none focus:shadow-outline resize-y"
                                    id="taskDescription"
                                    placeholder="Task Description"
                              />
                              <div className="mb-6 text-center">
                                    <button
                                          className="w-full px-4 py-2 font-bold text-white bg-blue-200 rounded-full hover:bg-blue-300 focus:outline-none focus:shadow-outline"
                                          type="submit"
                                    >
                                          Add Task
                                    </button>
                              </div>
                        </form>
                  </div>
            </div>
      );
}
