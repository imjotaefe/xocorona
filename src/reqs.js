import axios from 'axios';
import api from './api';

export const getCities = async (value, setLoading, setCities) => {
  setLoading(true);
  await axios.get(`https://servicodados.ibge.gov.br/api/v1/localidades/estados/${value}/municipios`)
    .then(response => { if (response.status === 200) { setCities(response.data); setLoading(false) } })
    .catch(error => console.log(error))
}

export const getData = async (value, setLoading, setData) => {
  setLoading(true);
  await api.get('/data', { params: { city: String(value), formart: 'json' } })
    .then(response => { if (response.status === 200) { setData(response.data.results[0]); setLoading(false) } })
    .catch(error => console.log(error))
}