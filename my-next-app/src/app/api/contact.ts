import { ContactType } from "@/_types/contact";
import axios from "axios";

const API_URL = 'http://localhost:3001';

export const getContacts = async (userId:String) => {
    const response = await axios.get(`${API_URL}/contacts?userId=${userId}`);
    return response.data;
}

export const getContactById = async (id:String) => {
    const response = await axios.get(`${API_URL}/contacts?/${id}`);
    return response.data;
}

export const createContact = async (contact:ContactType) => {
    const response = await axios.post(`${API_URL}/contacts`,contact);
    return response.data;
}

export const updateContact = async (id:String,contact:ContactType) => {
    const response = await axios.put(`${API_URL}/contacts/${id}`,contact);
    return response.data;
}

export const deleteContact = async (id:String) => {
    const response = await axios.delete(`${API_URL}/contacts/${id}`);
    return response.data;
}