/* eslint-disable jsx-a11y/anchor-is-valid */
import div from 'react';

const NavBar = ({ }) => {
    div.createElement('div');

    const filled = 0.45;
    return (
        <div style={{ backgroundColor: '#0F101C',minHeight:'100vh'}}>
            <div style={{
                backgroundColor: '#1C1D39',
                padding: 20,
                display: 'flex'
            }}>
                <div style={{ flex: 1, color: 'white' }}> DAO KING</div>
                <button style={{ backgroundColor: '#1C1D39', color: 'white', padding: 5, borderRadius: 5, borderColor: '#00C88C', borderWidth: 1.5, fontSize: 10 }}>WEBSITE</button>
                <button style={{ backgroundColor: '#00C88C', color: 'white', padding: 5, borderRadius: 5, marginLeft: 5, fontSize: 10 }}>CONNECT</button>
            </div>
            <div style={{ display: 'flex'}}>
                <div style={{ flex: 1, color: 'white', padding:70 }}>

                    <h1 style={{ padding: 10, margin: 5 }}>
                        Stake Your <span style={{color: '#00C88C'}}>$ Token</span> and Earn 20% Interest on Staked Token
                    </h1>
                    <div style={{ padding: 10, margin: 5 }}>
                        Lorem ipsum dolor sit amet, consectetur
                        adipiscing elit, sed do eiusmod tempor
                        incididunt ut labore et dolore magna
                        aliqua. Ut enim ad minim veniam, quis
                        nostrud exercitation ullamco laboris nisi ut
                        aliquip ex ea commodo consequat
                        ullamco laboris nisi ut aliquip ex ea commodo
                    </div>
                    <button style={{ backgroundColor: '#1C1D39', color: 'white', padding: 5, margin: 5, fontSize: 15 }}>APY In Percentage
                        <div style={{ color: '#00C88C' }}>24%</div>
                    </button>
                    <button style={{ backgroundColor: '#1C1D39', color: 'white', padding: 5, marginLeft: 5, fontSize: 15 }}>Current Token Price
                        <div style={{ color: '#00C88C' }}>1.384 USDT</div>
                    </button>
                </div>
                <div style={{ backgroundColor: '#0F101C', flex: 1 }}>
                      <div style= {{display: 'flex', alignItems: 'center', justifyContent: 'space-between'}}>
                        
                        <div style={{backgroundColor: '#1C1D39', padding:5, margin: 5}}>
                            <div style= {{color: 'white', fontSize: 15}}>Min Staking Amount</div>
                            <div style={{ color: '#00C88C', textAlign:'center' }}>50 USDT</div>
                        </div>
                        <div style={{backgroundColor: '#1C1D39', padding:5, margin: 5}}>
                           <div style= {{color: 'white', fontSize: 15}}>Max Staking Amount</div>
                            <div style={{ color: '#00C88C',textAlign: 'center' }}>500 USDT</div>
                        </div>
                        <div>
                            <table 
                            style={{color: 'white',
                                    border: '1',
                                    backgroundColor: '#1C1D39',
                                    padding: 10,
                                    margin: 5
                            }}>
                                <tr>
                                    <td style={{textAlign: 'left'}}>Your Wallet Address</td>
                                    <th style={{textAlign: 'right'}}>0x8F5d...8955</th>
                                </tr>
                                <tr>
                                    <td style={{textAlign: 'left'}}>Total Stakable Token</td>
                                    <th style={{textAlign: 'right'}}>53746 Token</th>
                                </tr>
                                <tr>
                                    <td style={{textAlign: 'left'}}>Total Stakable Token in USD</td>
                                    <th style={{textAlign: 'right'}}>$ 532345</th>
                                </tr>
                                <tr>
                                    <td style = {{textAlign: 'Left'}}>Unstake Fee</td>
                                    <th style={{textAlign: 'right'}}>15%</th>
                                </tr>
                                <tr>
                                    <td style = {{textAlign: 'left'}}>Lock Deadline</td>
                                    <th style={{textAlign: 'right'}}>30 Days</th>
                                </tr>
                                <tr>
                                    <td style = {{textAlign: 'left'}}>Pool Filled</td>
                                </tr>
                                <tr>
                                    <td colSpan={2}>
                                    <div style={{background: 'rgba(217,217,217,0.2)', borderRadius:12, height: 24}}>
                                        <div style={{background: '#00c88c', color: 'black', width: `${filled*100}%`, textAlign: 'center', borderTopLeftRadius: 12, borderBottomLeftRadius:12, height: '100%'}}>
                                            {filled*100} % filled
                                        </div>
                                    </div>
                                    </td>
                                </tr>
                                <tr>
                                    <td style={{textAlign: 'left'}}>Stake Your Token</td>
                                </tr>
                                <tr>
                                    <td colSpan={2}>
                                        <div style={{display:'flex'}}>
                                            <div style={{backgroundColor:'rgba(217,217,217,0.2)',flex:1, fontSize: 14, padding: 10}}>
                                                Enter Amount of Token
                                            </div>
                                            <button style={{fontSize: 12, padding: 5, flex: 0.}}>MAX</button>
                                        </div>
                                    </td>
                                </tr>
                                <tr>
                                    <td colSpan={2}>
                                        <div style={{display: 'flex', textAlign: 'center'}}>
                                        <div style={{flex:1,margin:5,padding:2, borderRadius:5, backgroundColor:'white', color:'black',fontSize:15}}>STAKE</div>
                                        <div style={{flex:1,margin:5,padding:2, borderRadius:5, backgroundColor:'white', color:'black',fontSize:15}}>UNSTAKE</div>
                                        </div>
                                    </td>
                                </tr>
                                <tr>
                                    <td colSpan={2}>
                                        <div style={{backgroundColor:'red', color:'white',padding: 2, borderRadius:5, textAlign: 'center'}}>EMERGENCY WITHDRAW</div>
                                    </td>
                                </tr>
                            </table>
                        </div>
                    </div>

                </div>

            </div>
        </div>
    );
}

export default NavBar;