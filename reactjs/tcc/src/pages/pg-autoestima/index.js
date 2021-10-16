import { Container } from "../../components/cabecalho/styled";
import { useState, useEffect, React, useRef } from 'react';
import { ToastContainer, toast } from 'react-toastify';

import { confirmAlert } from 'react-confirm-alert';
import 'react-confirm-alert/src/react-confirm-alert.css';
import { useHistory } from 'react-router-dom';

import Cookies from 'js-cookie';

import Api from '../../service/api.js'
const api = new Api ();


function Usuariocadastro (navigation) {
    let cadastrado = Cookies.get('usuario-cadastrado');
    if (cadastrado == null);
    navigation.push('/');

    let usuariologado = JSON.parse(logado)
    return usuariologado;
}