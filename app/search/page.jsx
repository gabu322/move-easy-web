'use client';

import axios from "axios";
import { useEffect, useState } from "react";

export default function Page() {
    const [data, setData] = useState(null);
    useEffect(() => {
        axios.get('https://d384216d-6461-4636-9f0a-471b83c27a50.mock.pstmn.io/api/info/29102345')
            .then((res) => {
                setData(res.data.data.cidade);
                console.log(res.data.data.cidade);
            });
    }, []);

    return <main className="flex flex-row">
        <div className="w-3/5 mx-auto my-10 flex flex-col gap-6">
        <div>
            <h1 className="text-4xl font-bold">{data?.nome}</h1>
            <h2 className="text-2xl font-bold">{data?.estado}</h2>
        </div>

            <div className="w-full h-32 bg-white rounded shadow p-4">
                <h3 className="text-2xl font-bold">Clima:</h3>
                <p>Tipo: {data?.clima.tipo}</p>
                <p>Temperatura Média Anual: {data?.clima.temperatura_media_anual_celsius} °C</p>
                <p>Precipitação Média Anual: {data?.clima.precipitacao_media_anual_mm} mm</p>
            </div>

            <div className="w-full bg-white rounded shadow p-4">
                <h3 className="text-2xl font-bold">Aeroportos:</h3>
                {data?.infraestrutura.aeroportos.map((aeroporto, index) => (
                    <p key={index}>{aeroporto.nome} ({aeroporto.codigo}) - {aeroporto.tipo}</p>
                ))}
            </div>

            <div className="w-full bg-white rounded shadow p-4">
                <h3 className="text-2xl font-bold">Transportes Públicos:</h3>
                <p>Metrô: {data?.infraestrutura.transportes_publicos.metro.linhas} linhas, {data?.infraestrutura.transportes_publicos.metro.extensao_km} km</p>
                <p>Ônibus: {data?.infraestrutura.transportes_publicos.onibus.linhas} linhas, {data?.infraestrutura.transportes_publicos.onibus.veiculos} veículos</p>
            </div>

            <div className="w-full bg-white rounded shadow p-4">
                <h3 className="text-2xl font-bold">Museus:</h3>
                <p>Total: {data?.infraestrutura.museus.museus}</p>
                <p>Principais Museus:</p>
                <ul>
                    {data?.infraestrutura.museus.principais_museus.map((museu, index) => (
                        <li key={index}>{museu}</li>
                    ))}
                </ul>
            </div>

            <div className="w-full bg-white rounded shadow p-4">
                <h3 className="text-2xl font-bold">Teatros:</h3>
                <p>Total: {data?.infraestrutura.teatros.teatros}</p>
                <p>Principais Teatros:</p>
                <ul>
                    {data?.infraestrutura.teatros.principais_teatros.map((teatro, index) => (
                        <li key={index}>{teatro}</li>
                    ))}
                </ul>
            </div>

            <div className="w-full bg-white rounded shadow p-4">
                <h3 className="text-2xl font-bold">Parques:</h3>
                <p>Total: {data?.infraestrutura.parques.parques}</p>
                <p>Principais Parques:</p>
                <ul>
                    {data?.infraestrutura.parques.principais_parques.map((parque, index) => (
                        <li key={index}>{parque}</li>
                    ))}
                </ul>
            </div>

            <div className="w-full bg-white rounded shadow p-4">
                <h3 className="text-2xl font-bold">Rodoviárias:</h3>
                <p>Total: {data?.infraestrutura.rodoviarias.rodoviarias}</p>
                <p>Principais Rodoviárias:</p>
                <ul>
                    {data?.infraestrutura.rodoviarias.principais_rodoviarias.map((rodoviaria, index) => (
                        <li key={index}>{rodoviaria}</li>
                    ))}
                </ul>
            </div>

            <div className="w-full bg-white rounded shadow p-4">
                <h3 className="text-2xl font-bold">Educação:</h3>
                <p>Principais Universidades:</p>
                <ul>
                    {data?.educacao.principais_universidades.map((universidade, index) => (
                        <li key={index}>{universidade}</li>
                    ))}
                </ul>
            </div>

            <div className="w-full bg-white rounded shadow p-4">
                <h3 className="text-2xl font-bold">Saúde:</h3>
                <p>Total de Hospitais: {data?.saude.hospitais}</p>
                <p>Principais Hospitais:</p>
                <ul>
                    {data?.saude.principais_hospitais.map((hospital, index) => (
                        <li key={index}>{hospital}</li>
                    ))}
                </ul>
            </div>

            <div className="w-full bg-white rounded shadow p-4">
                <h3 className="text-2xl font-bold">Segurança:</h3>
                <p>Indicadores de Criminalidade:</p>
                <ul>
                    <li>Homicídios por 100 mil habitantes: {data?.seguranca.indicadores_criminalidade.homicidios_por_100_mil_habitantes}</li>
                    <li>Roubos por 100 mil habitantes: {data?.seguranca.indicadores_criminalidade.roubos_por_100_mil_habitantes}</li>
                    <li>Furtos por 100 mil habitantes: {data?.seguranca.indicadores_criminalidade.furtos_por_100_mil_habitantes}</li>
                    <li>Veículos Roubados por 100 mil habitantes: {data?.seguranca.indicadores_criminalidade.veiculos_roubados_por_100_mil_habitantes}</li>
                </ul>
                <p>Policiamento:</p>
                <ul>
                    <li>Delegacias: {data?.seguranca.policiamento.delegacias}</li>
                    <li>Postos Policiais: {data?.seguranca.policiamento.postos_policiais}</li>
                    <li>Efetivo Policial: {data?.seguranca.policiamento.efetivo_policial}</li>
                </ul>
                <p>Programas de Segurança:</p>
                <ul>
                    {data?.seguranca.programas_de_seguranca.map((programa, index) => (
                        <li key={index}>{programa}</li>
                    ))}
                </ul>
            </div>

            <div className="w-full bg-white rounded shadow p-4">
                <h3 className="text-2xl font-bold">Tráfego de Veículos:</h3>
                <p>Principais Corredores:</p>
                <ul>
                    {data?.trafego_veiculos.principais_corredores.map((corredor, index) => (
                        <li key={index}>{corredor}</li>
                    ))}
                </ul>
                <p>Veículos Registrados: {data?.trafego_veiculos.veiculos_registrados}</p>
                <p>Indicadores de Congestionamento:</p>
                <ul>
                    <li>Tempo Médio de Deslocamento: {data?.trafego_veiculos.indicadores_congestionamento.tempo_medio_deslocamento_minutos} minutos</li>
                    <li>Pico de Congestionamento: {data?.trafego_veiculos.indicadores_congestionamento.pico_congestionamento_km} km</li>
                </ul>
            </div>
            <div className="w-full bg-white rounded shadow p-4">
                <h3 className="text-2xl font-bold">Tráfego de Veículos:</h3>
                <p>Principais Corredores:</p>
                <ul>
                    {data?.trafego_veiculos.principais_corredores.map((corredor, index) => (
                        <li key={index}>{corredor}</li>
                    ))}
                </ul>
                <p>Veículos Registrados: {data?.trafego_veiculos.veiculos_registrados}</p>
                <p>Indicadores de Congestionamento:</p>
                <ul>
                    <li>Tempo Médio de Deslocamento: {data?.trafego_veiculos.indicadores_congestionamento.tempo_medio_deslocamento_minutos} minutos</li>
                    <li>Pico de Congestionamento: {data?.trafego_veiculos.indicadores_congestionamento.pico_congestionamento_km} km</li>
                </ul>
            </div>

            <div className="w-full bg-white rounded shadow p-4">
                <h3 className="text-2xl font-bold">Custos Médios:</h3>
                <p>Moradia:</p>
                <ul>
                    <li>Aluguel de Apartamento no Centro: {data?.custos_medios.moradia.aluguel_apartamento_centro_mensal} reais/mês</li>
                    <li>Aluguel de Apartamento na Periferia: {data?.custos_medios.moradia.aluguel_apartamento_periferia_mensal} reais/mês</li>
                    <li>Preço por m² para Compra no Centro: {data?.custos_medios.moradia.preco_m2_compra_centro} reais/m²</li>
                    <li>Preço por m² para Compra na Periferia: {data?.custos_medios.moradia.preco_m2_compra_periferia} reais/m²</li>
                </ul>
                <p>Transporte:</p>
                <ul>
                    <li>Bilhete Único (Metrô/Ônibus): {data?.custos_medios.transporte.bilhete_unico_metro_onibus} reais</li>
                    <li>Passe Mensal de Transporte Público: {data?.custos_medios.transporte.passe_mensal_transporte_publico} reais</li>
                    <li>Gasolina (por litro): {data?.custos_medios.transporte.gasolina_litro} reais</li>
                </ul>
            </div>
        </div>
    </main>
};
