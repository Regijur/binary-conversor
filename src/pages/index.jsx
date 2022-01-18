import Head from 'next/head'
import React,{ useState } from 'react'

export default function Home() {
  const [binary, SetBinary] = useState("")
  const [decimal, SetDecimal] = useState("")
  const [option, SetOption] = useState('0')

  function convert(){
    if(option == 1 && decimal != ""){
      let dec = parseInt(decimal, 10)
      let bin = ''
      while(dec > 1){
        if(EvenOrOdd(dec) == 1){
          dec--
          bin = '1' + bin
        }
        else{
          bin = '0' + bin
        }
        dec *= 0.5
      }
      bin = '1' + bin
      
      SetBinary(bin)
    }
    else if(option == 0 && binary != ""){
      let bin = parseInt(binary, 2)
      SetDecimal(bin)
    }
    else{
      console.log('input inválido')
    }
  }

  function ChangeOption(op){
    SetOption(op)
  }

  function EvenOrOdd(num){
    return num % 2
  }

  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Encontrei um repositório no GitHub com o 
        nome App-Ideas são várias ideias de aplicações separadas por nível de habilidade 
        então decidi fazer todas, e esse é o primeiro da lista um conversor de binário para
        número decimal" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <h1 className="title">Conversor de Binário</h1>
        <div className="container">
          <div className="radio">
            <input type="radio" name="convertOption" defaultChecked id="1" onChangeCapture={() => ChangeOption(0)}/> Binário para Decimal
            <input type="radio" name="convertOption" id="2" onChangeCapture={() => ChangeOption(1)}/> Decimal para Binário
          </div>
          <label className='binaryLabel' htmlFor="binary">Binário</label>
          <input className='binaryInput' type="text" name="binaryNumber" id="1" placeholder='Número Binário' value={binary} onChange={e => SetBinary(e.target.value)}/>
          <label className='decimalLabel' htmlFor="decimal">Decimal</label>
          <input className='decimalInput' type="text" name="decimalNumber" id="1" placeholder='Número Decimal' value={decimal} onChange={e => SetDecimal(e.target.value)}/>
          <button className='convertButton' onClick={e => convert()}>Converter</button>
        </div>
      </main>
    </div>
  )
}
