import React, { useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { deleteUser, editUser, addNewUser } from "./getTodolist"
import { Button } from "@mui/material"
import Dialog from "@mui/material/Dialog"
import DialogActions from "@mui/material/DialogActions"
import DialogTitle from "@mui/material/DialogTitle"
import TextField from "@mui/material/TextField"

const Get = () => {
  let users = useSelector(store => store.todolist.users)
  let dispatch = useDispatch()

  let [modalAdd, setModalAdd] = useState("")
  let [imageInputAdd, setImageInputAdd] = useState("")
  let [nameInputAdd, setNameInputAdd] = useState("")
  let [priceInputAdd, setPriceInputAdd] = useState("")

  let [modalEdit, setModalEdit] = useState("")
  let [imageInputEdit, setImageInputEdit] = useState("")
  let [nameInputEdit, setNameInputEdit] = useState("")
  let [priceInputEdit, setPriceInputEdit] = useState("")
  let [idx, setIdx] = useState(null)

  function addUser() {
    let newUser = {
      image: imageInputAdd,
      name: nameInputAdd,
      price: priceInputAdd
    }
    dispatch(addNewUser(newUser))
    setImageInputAdd("")
    setNameInputAdd("")
    setPriceInputEdit("")
    setModalAdd(false)
  }

  function editInfo(e) {
    setModalEdit(true)
    setImageInputEdit(e.image)
    setNameInputEdit(e.name)
    setPriceInputEdit(e.price)
    setIdx(e.id)
  }

  function edit() {
    let updateUser = {
      image: imageInputEdit,
      name: nameInputEdit,
      price: priceInputEdit,
      id: idx
    }
    dispatch(editUser(updateUser))
    setModalEdit(false)
  }
  return (
    <div>
      <div className='modalEdit'>
        <Dialog open={modalEdit} onClose={() => setModalEdit(false)} aria-labelledby='alert-dialog-title' aria-describedby='alert-dialog-description'>
          <DialogTitle id='alert-dialog-title'>{"Edit Modal"}</DialogTitle>
          <TextField value={imageInputEdit} onChange={e => setImageInputEdit(e.target.value)} id='outlined-basic' label='Outlined' variant='outlined' />
          <TextField value={nameInputEdit} onChange={e => setNameInputEdit(e.target.value)} id='outlined-basic' label='Outlined' variant='outlined' />
          <TextField value={priceInputEdit} onChange={e => setPriceInputEdit(e.target.value)} id='outlined-basic' label='Outlined' variant='outlined' />
          <DialogActions>
            <Button onClick={() => setModalEdit(false)}>Close</Button>
            <Button onClick={edit} autoFocus>
              Save
            </Button>
          </DialogActions>
        </Dialog>
      </div>

      <div className='modalAdd'>
        <Dialog open={modalAdd} onClose={() => setModalAdd(false)} aria-labelledby='alert-dialog-title' aria-describedby='alert-dialog-description'>
          <DialogTitle id='alert-dialog-title'>{"Add Modal"}</DialogTitle>
          <TextField value={imageInputAdd} onChange={e => setImageInputAdd(e.target.value)} id='outlined-basic' label='Outlined' variant='outlined' />
          <TextField value={nameInputAdd} onChange={e => setNameInputAdd(e.target.value)} id='outlined-basic' label='Outlined' variant='outlined' />
          <TextField value={priceInputAdd} onChange={e => setPriceInputAdd(e.target.value)} id='outlined-basic' label='Outlined' variant='outlined' />
          <DialogActions>
            <Button onClick={() => setModalAdd(false)}>Close</Button>
            <Button onClick={addUser} autoFocus>
              Save
            </Button>
          </DialogActions>
        </Dialog>
      </div>

      <div className='pt-10'>
        <Button onClick={() => setModalAdd(true)} variant='contained'>
          Add
        </Button>
      </div>

      <div className='flex flex-wrap justify-center -mx-2'>
        {users.map(e => (
          <div key={e.id} className='w-64 bg-white rounded-2xl shadow-lg p-4 flex flex-col items-center mx-2 mb-4'>
            <div className='w-full overflow-hidden rounded-lg mb-3'>
              <img src={e.image} alt={e.name} className='w-full h-full object-cover' />
            </div>
            <h4 className='text-xs text-gray-500 text-center mb-1 h-8 overflow-hidden'>{e.name}</h4>
            <h2 className='text-xl font-bold text-blue-600 mb-3'>{e.price} ₽/шт.</h2>
            <div className='flex gap-2 mt-auto'>
              <Button onClick={() => dispatch(deleteUser(e.id))} variant='contained'>
                Delete
              </Button>
              <Button onClick={() => editInfo(e)} variant='contained'>
                Edit
              </Button>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Get
