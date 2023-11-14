import React from 'react'
import { useDispatch } from 'react-redux'
import { yupResolver } from '@hookform/resolvers/yup'
import { useForm } from 'react-hook-form'
import * as yup from 'yup'
import { addCard, setCreateOpenCloseModal1 } from 'store/slices/tickets.slice'
import { type ICardForm } from 'types'

interface Props {
  categoryId: number
}

const schema = yup
  .object()
  .shape({
    title: yup.string().required(),
    type: yup.string().required(),
  })
  .required()

export const AddTicketModalComponent: React.FC<Props> = ({ categoryId }) => {
  const { register, handleSubmit } = useForm<ICardForm>({
    resolver: yupResolver(schema),
  })
  const dispatch = useDispatch()

  const closeModal = (): void => {
    dispatch(setCreateOpenCloseModal1(categoryId))
  }

  const submitHandler = (data: ICardForm): void => {
    // const formattedDate = new Date(new Date().getFullYear(), new Date().getMonth() + 1, new Date().getDate());
    const card = {
      categoryId,
      title: data.title,
      type: data.type,
      description: data.description,
      date: 'November, 13, 2023',
    }
    dispatch(addCard(card))
    dispatch(setCreateOpenCloseModal1(categoryId))
  }

  return (
    <div id="myModal" className="modal">
      <form
        // eslint-disable-next-line @typescript-eslint/no-misused-promises
        onSubmit={handleSubmit((e) => {
          submitHandler(e)
        })}
      >
        <div className="modal-content">
          <div className="modal-header">
            <span className="close" onClick={closeModal}>
              &times;
            </span>
            <p className="leading-X text-[28px] font-bold tracking-wider text-gray-800">
              Task
            </p>
          </div>
          <div className="modal-body">
            <div className="block">
              <div className="mb-3 mt-3">
                <label
                  htmlFor="title"
                  className="text-indigo-900 font-roboto text-xs font-medium"
                >
                  Task Title <span className="text-redCol">*</span>
                </label>
              </div>
              <div className="mb-4">
                <input
                  className="w-full rounded-lg border border-gray-300 bg-white text-gray-700 font-roboto text-xs font-normal leading-loose tracking-wider pl-3 pt-2 pb-2 pr-3"
                  type="text"
                  id="title"
                  {...register('title')}
                />
              </div>
            </div>
            <div>
              <div className="mb-3">
                <label
                  htmlFor="type"
                  className="text-indigo-900 font-roboto text-xs font-medium"
                >
                  Task Type <span className="text-redCol">*</span>
                </label>
              </div>
              <div className="mb-4">
                <input
                  className="w-full rounded-lg border border-gray-300 bg-white text-gray-700 font-roboto text-xs font-normal leading-loose tracking-wider pl-3 pt-2 pb-2 pr-3"
                  type="text"
                  id="type"
                  {...register('type')}
                />
              </div>
            </div>
            <div>
              <div className="mb-3">
                <label
                  htmlFor="description"
                  className="text-indigo-900 font-roboto text-xs font-medium"
                >
                  Summary
                </label>
              </div>
              <div className="mb-4">
                <textarea
                  {...register('description')}
                  id="description"
                  className="w-full rounded-lg border border-gray-300 bg-white text-gray-700 font-roboto text-xs font-normal leading-loose tracking-wider pl-3 pt-2 pb-2 pr-3"
                  cols={30}
                  rows={8}
                ></textarea>
              </div>
            </div>
          </div>
          <div className="modal-footer text-right">
            <button
              type="submit"
              className="rounded-[10px] bg-indigo-500 font-roboto text-base font-medium text-white p-[14px]"
            >
              Create a Task
            </button>
          </div>
        </div>
      </form>
    </div>
  )
}
