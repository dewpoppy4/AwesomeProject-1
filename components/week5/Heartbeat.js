import React from "react";
import { TouchableOpacity, View } from "react-native";
import { FontAwesome } from "@expo/vector-icons";

export default function Heartbeat() {

    const [heart, setHeart] = useState('0');

    console.log("STATE : ", heart);

    const onPressButton = () => {
        console.log("Calculate");

        // let output = (weight / (height / 100 * height / 100));
        // setBmi(output.toFixed(2));

        // let description = "";
        // if (output < 18.5)
        //     description = "Underweight";
        // else if (output >= 18.5 && output <= 24.9)
        //     description = "Normal";
        // else if (output >= 25 && output <= 29.9)
        //     description = "Overweight";
        // else if (output >= 30 && output <= 34.9)
        //     description = "Obese";
        // else
        //     description = "Extremely Obese";

        // setProportion(description);

    };

    return (
        <View>
            
            {/* <View style = {{flex :'row', padding : 50 ,justifyContent: 'space-around'}}> 
            
            </View>
            <TouchableOpacity onPress={onPressButton}>
                <View style={{ padding: 20, backgroundColor: "blue", borderRadius: 40 }}>
                    <Text style={{ fontSize: 30, textAlign: "center", color: 'white' }}>
                        Calculate
                    </Text>
                </View>
            </TouchableOpacity> */}
        </View>
    );
}
