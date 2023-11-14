import React from 'react'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'
import { useDispatch } from 'react-redux'
import { addBoard } from 'store/slices/tickets.slice'
import { type IBoardTitle } from 'types'
import { useNavigate } from 'react-router-dom'
import { PATHS } from 'utils/consts'

const schema = yup
  .object()
  .shape({
    boardTitle: yup.string().required(),
  })
  .required()

export const CreateBoardCardComponent: React.FC = () => {
  const dispatch = useDispatch()
  const { register, handleSubmit } = useForm<IBoardTitle>({
    resolver: yupResolver(schema),
  })
  const navigate = useNavigate()

  const submitHandler = (data: IBoardTitle): void => {
    dispatch(addBoard(data.boardTitle))
    navigate(PATHS.CREATECATEGORY)
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
          Board Title <span className="text-[red]">*</span>
        </label>
        <div>
          <input
            type="text"
            {...register('boardTitle')}
            placeholder="UI Changes"
            className="h-[43px] flex-1 pl-3 rounded-lg border border-gray-300 text-gray-700 font-roboto text-sm font-normal leading-loose tracking-tight"
          />
        </div>
        <div>
          <button
            type="submit"
            className="bg-customCol3 flex-1 text-white h-[43px] pl-[14px] pr-[14px] rounded-[10px] font-roboto text-base font-medium leading-normal"
          >
            Create a Board
          </button>
        </div>
      </form>
    </div>
  )
}
