import React, { useState } from 'react';
import { View,Text, TextInput, Button } from 'react-native';
import Result from './Result';

export default function Form() {

  const [altura, setAltura] = useState(null)
  const [peso, setPeso] = useState(null)
  const [menssagem, setMenssagem] = useState('Preencha o formulário')
  const [imc, setIMC] = useState(null)
  const [botao, setBotao] = useState('Calcular')

  function imcCalculo(){
    return setIMC((peso / (altura * altura)).toFixed(2))
  }

  function validIMC() {
    if (peso !== null && altura !== null) {
      imcCalculo()
      setAltura(null)
      setPeso(null)
      setMenssagem('Seu IMC é igual a: ')
      setBotao('Calcular novamente')
      return 1
    }
    setIMC(null)
    setBotao('Calcular')
    setMenssagem('Preencha o que está vazio')
  }

  return (
    <View>
      <View>
        <Text>
          Altura
        </Text>
        <TextInput
          onChangeText={setAltura}
          value={altura}
          placeholder='Ex.: 1.65'
          keyboardType='numeric'
        >
        </TextInput>

        <Text>
          Peso
        </Text>
        <TextInput
          onChangeText={setPeso}
          value={peso}
          placeholder='Ex.: 73.60'
          keyboardType='numeric'
        >
        </TextInput>

        <Button
          onPress={ () => validIMC() }
          title={botao}
        />
      </View>
      <Result results={ menssagem } resultsIMC={ imc }/>
      <View>
        
        </View>
    </View>
  )
}