import { useContext, useState } from 'react'
import { useForm } from 'react-hook-form'
import { TechContext } from '../providers/TechContext'
import { BackgroundModal, ModalContainer, ButtonContainer } from './style'

function Modal({ isOpen, setModalOpen, typeModal, techId }) {
    const { createTechnologie, deleteTechnologie, editTechnologie, editingTech } = useContext(TechContext)
    
    const [update, setUpadate] = useState('')

    const { register, handleSubmit } = useForm({
        defaultValues: {
            title: editingTech?.title,
            status: editingTech?.status
        }
    })
    console.log(editingTech?.status, editingTech?.title)
    console.log({...register('title')}, { ...register('status')})

    async function submit(data) {
        await createTechnologie(data)
    }


    function infoTech() {
        editTechnologie({status: update}, editingTech.id)
    }

    if (isOpen) {
        if (typeModal == 'createModal') {
            return (
                <BackgroundModal>
                    <ModalContainer onSubmit = {handleSubmit(submit)}>
                        <div>
                            <h3>Cadastrar Tecnologia</h3>
                            <span onClick={setModalOpen}>X</span>
                        </div>
                        <section>
                            <div>
                                <label htmlFor="">Nome</label>
                                <input type="text" {...register('title')} placeholder='Qual tecnlogia?' />
                            </div>
                            <div>
                                <label htmlFor="Status">Selecionar Status</label>
                                <select {...register('status')}>
                                    <option value="">Selecionar</option>
                                    <option value="Iniciante">Iniciante</option>
                                    <option value="Intermediário">Intermediário</option>
                                    <option value="Avançado">Avancado</option>
                                </select>
                                <button type='submit'>Cadastrar Tecnologia</button>
                            </div>
                        </section>
                    </ModalContainer>
                </BackgroundModal>
            )
        } else {
            return (
                <BackgroundModal>
                    <ModalContainer onSubmit = {handleSubmit(submit)}>
                        <div>
                            <h3>Editar Tecnologia</h3> 
                            <span onClick={setModalOpen}>X</span>
                        </div>
                        <section>
                            <div>
                                <label htmlFor="">Nome do projeto</label>
                                <input type="text" disabled {...register('title')} placeholder={editingTech?.title} />
                                {console.log({...register('title')})}
                            </div>
                            <div>
                                <label htmlFor="Status">Status</label>
                                <select {...register('status')} value={editingTech?.status} onChange={(e) => setUpadate(e.target.value)}>
                                    {console.log({...register('status')})}
                                    <option value="">Selecionar</option>
                                    <option value="Iniciante">Iniciante</option>
                                    <option value="Intermediário">Intermediário</option>
                                    <option value="Avançado">Avancado</option>
                                </select>
                                    <ButtonContainer>
                                        <button type='button' onClick={() => infoTech()}>Editar Tecnologia</button>
                                        <button type='button' onClick={() => deleteTechnologie(techId)}>Excluir</button>
                                    </ButtonContainer>
                            </div>
                        </section>
                    </ModalContainer>
                </BackgroundModal>
            )   
        }
    }

    return null
}

export default Modal