import React, { useState } from 'react';
import { Plus, X } from 'phosphor-react'
import * as Dialog from '@radix-ui/react-dialog';


import logoImage from '../assets/logo.svg'
import { NewHabitForm } from './NewHabitForm';

export function Header() {

 

  return (
<div className='w-full max-w3xl mx-auto flex justify-between items-center'>
        <img src={logoImage} alt="habits"></img>

        <Dialog.Root>
        <Dialog.Trigger 
        className='border border-violet-500 font-semibold rounded-lg px-6 py-4 flex items-center gap-3 hover:border-violet-300'
        type='button'
        >
          <Plus size={20} className='text-violet-500'></Plus>
          Novo hábito
        </Dialog.Trigger >

        <Dialog.Portal>
          <Dialog.Overlay className='w-100 h-100 bg-black/80 fixed inset-8'/>
          <Dialog.Content className='absolute p-10 bg-zinc-600 rounded-2xl w-full max-w-md top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2'>
            <Dialog.Close className='absolute right-6 top-6 text-zinc-400 hover:text-zinc-200'>
              <X size={24} aria-label="Fechar"></X>
            </Dialog.Close>

            <Dialog.Title className='text-3xl leading-tight font-bold'>
              Criar Hábito
            </Dialog.Title>

            <NewHabitForm></NewHabitForm>
          </Dialog.Content>
        </Dialog.Portal>

        </Dialog.Root>

        </div>
  );
}