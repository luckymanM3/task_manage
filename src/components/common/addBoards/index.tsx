import React from 'react'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'
import { useDispatch } from 'react-redux'
import { addCategory } from 'store/slices/tickets.slice'
import { type IListTitle } from 'types'

const schema = yup
  .object()
  .shape({
    listTitle: yup.string().required(),
  })
  .required()

export const AddCategoryCardComponent: React.FC = () => {
  const dispatch = useDispatch()
  const { register, handleSubmit, setValue } = useForm<IListTitle>({
    resolver: yupResolver(schema),
  })

  const submitHandler = (data: IListTitle): void => {
    dispatch(addCategory(data.listTitle))
    setValue('listTitle', '')
  }

  return (
    <div className="w-[235px] h-[193px] pl-3 pr-8 rounded-xl bg-white">
      <form
        // eslint-disable-next-line @typescript-eslint/no-misused-promises
        onSubmit={handleSubmit((e) => {
          submitHandler(e)
        })}
        className="flex flex-col h-full justify-evenly"
      >
        <label htmlFor="board flex-1 text-blue-800 font-roboto text-base font-medium">
          Enter List Title <span className="text-[red]">*</span>
        </label>
        <div>
          <input
            type="text"
            {...register('listTitle')}
            placeholder="Issues"
            className="h-[43px] flex-1 pl-3 rounded-lg border border-gray-300 text-gray-700 font-roboto text-sm font-normal leading-loose tracking-tight"
          />
        </div>
        <div>
          <button
            type="submit"
            className="bg-customCol3 flex-1 text-white h-[43px] pl-[14px] pr-[14px] rounded-[10px] font-roboto text-base font-medium leading-normal"
          >
            Add List
          </button>
        </div>
      </form>
    </div>
  )
}
