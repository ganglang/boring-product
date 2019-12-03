### Image组件
```
import React,{Component} from 'react';
import {Image} from 'react-native';

export default class Bananas extends Component{
    render(){
        let pic={
            uri:'https://upload.wikimedia.org/wikipedia/commons/d/de/Bananavarieties.jpg'
        };
        return (
            <View style={{alignItems:'center',marginTop:50}}>
                <Image source={pic} style={{width:193,height:110}}></Image>
            </View>
            
        )
    }
}

```

### 样式
```
import React,{Component} from 'react';
import {StyleSheet,Text,View} from 'react-native';

export default class LotsOfStyels extends Component{
    render(){
        return (
            <View>
                <Text style={styles.red}>just red</Text>
                <Text style={styles.bigBlue,styles.red}>bigBlue,then red</Text>
            </View>
        )
    }
}

const styles=StyleSheet.create({
    bigBlue:{
        color:'blue',
        fontWeight:'bold',
        fontSize:30,
    },
    red:{
        color:'red',
    }
})

```

### 弹性(Flex)宽高
```
import React,{Component} from 'react';
import {View} from 'react-native';

export default class FlexDimensionsBasics extends Component{
    render(){
      // 试试去掉父View中的`flex: 1`。
      // 则父View不再具有尺寸，因此子组件也无法再撑开。
      // 然后再用`height: 300`来代替父View的`flex: 1`试试看？
        <View style={{flex:1}}>
            <View style={{flex:1,backgroundColor:'powderblue'}}></View>
            <View style={{flex:2,backgroundColor:'skyblue'}}></View>
            <View style={{flex:3,backgroundColor:'steelblue'}}></View>
        </View>
    }
}

```

### Align Items
```
import React,{Component} from 'react';
import {View} from 'react-native';

export default class AlignItemBasics extends Component{
    render(){
        return (
            //注意：要使stretch选项生效的话，子元素在次轴方向上不能有固定的尺寸
            <View style={{
                flex:1,
                flexDirection:'column',
                justifyContent:'center',
                alignItems:'stretch',
            }}>
                <View style={{width:50,height:50,backgroundColor:'powderblue'}}></View>
                <View style={{height:50,backgroundColor:'skyblue'}}></View>
                <View style={{height:50,backgroundColor:'steelblue'}}></View>
            </View>
        )
    }
}

```

### TextInput
```
import React,{Component} from 'react';
import {Text,TextInput,View} from 'react-native';

export default class PizzaTranslator extends Component{
    state={
        text:''
    }
    render(){
        return (
            <View>
                <TextInput 
                    style={{height:40}}
                    placeholder="Type here to  translate" 
                    onChangeText={(text)=>this.setState({text})}
                    value={this.state.text} />
                <Text style={{padding:10,fontSize:42}}>
                    {this.state.text.split(' ').map(word=>word && '&&&').join(' ')}
                </Text>    
            </View>
        )
    }
}

```

### Button,Alert
```
import React,{Component} from 'react';
import {Alert,Button,StyleSheet,View} from 'react-native';

export default class ButtonBasics extends Component{
    _onPressButton(){
        Alert.alert('You tapped the button');
    }

    render(){
        return (
            <View style={styles.alternativeLayoutButtonContainer}>
                <Button onPress={this._onPressButton}
                    title="Press Me"
                    color="#841584"></Button>
            </View>
        )
    }
}

const styles=StyleSheet.create({
    alternativeLayoutButtonContainer:{
        margin:20,
        flexDirection:'row',
        justifyContent:'space-between'
    }
})

```

### TouchableHighlight,TouchableOpacity,TouchableNativeFeedback,TouchableWithoutFeedback
```
import React,{Component} from 'react';
import {Alert,Platform,StyleSheet,Text,TouchableHighlight,TouchableOpacity,TouchableNativeFeedback,TouchableWithoutFeedback,View} from 'react-native';

export default class Touchables extends Component{
    _onPressButton(){
        Alert.alert('You tapped the button!')
    }

    _onLongPressButton(){
        Alert.alert('You long-pressed the button!')
    }

    render(){
        return (
            <View style={styles.container}>
                <TouchableHighlight onPress={this._onPressButton} underlayColor="white">
                    <View style={styles.button}>
                        <Text  style={styles.buttonText}>TouchableHighlight</Text>
                    </View>
                </TouchableHighlight>
                <TouchableNativeFeedback onPress={this._onPressButton} background={Platform.OS==='android'?TouchableNativeFeedback.SelectableBackground():''}>
                    <View style={styles.button}>
                        <Text
                         style={styles.buttonText}>TouchableNativeFeedback</Text>
                    </View>
                </TouchableNativeFeedback>
                <TouchableWithoutFeedback 
                    onLongPress={this._onLongPress} underlayColor="white">
                    <View style={styles.button}>
                        <Text style={styles.buttonText}>
                            TouchableWithoutFeedback
                        </Text>
                    </View>
                </TouchableWithoutFeedback>
            </View>
        )
    }
}

const styles=StyleSheet.create({
    container:{
        paddingTop:60,
        alignItems:'center'
    },
    button:{
        marginBottom:30,
        width:260,
        alignItems:'center',
        backgroundColor:'#2196f3'
    },
    buttonText:{
        textAlign:'center',
        padding:20,
        color:'white'
    }

})

```