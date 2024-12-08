import { StyleSheet } from "react-native";
import { responsiveHeight } from "react-native-responsive-dimensions";

export const ThemeColor = '#2F7E79'
export const Padding = 15
export const RowCardHeight = 60

export const cStyle = StyleSheet.create({
    button: {
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        marginVertical: 10,
        height: 50,
        borderRadius: 20
    },
    btnTxt: {
        color: '#fff',
        fontSize: 18,
        fontWeight: '600'
    },
    icon: {
        backgroundColor: 'rgba(240,240,240,0.2)',
        width: 30,
        height: 30,
        alignItems: 'center',
        justifyContent: 'center',
        padding: 4,
        borderRadius: 6
    },
    iconItem: {
        width: '90%',
        height: '90%',
        tintColor: '#fff',
        fontWeight: '800'
    },
    fieldLabel: {
        fontSize: 14,
        color: '#666666',
        textTransform: 'uppercase',
        fontWeight: '500',
        marginBottom: 10
    },
    field: {
        borderColor: '#DDDDDD',
        borderWidth: 1,
        borderRadius: 7,
        paddingVertical: 13,
        paddingHorizontal: 17,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    flex: {
        flexDirection: 'row',
        alignItems:'center'
    },
    icon2: {
        width: 10,
        height: 10,
        tintColor: '#888888'
    },
    fieldName: {
        color: '#666666',
        fontSize: 16
    },
    fieldContainer: {
        marginBottom: responsiveHeight(3)
    },
    formModal: {
        backgroundColor: '#fff',
        width: '90%',
        top: responsiveHeight(-13),
        alignSelf: 'center',
        borderRadius: 20,
        boxShadow: '0 0 25 6 rgba(180,180,180,0.3)',
        paddingHorizontal: Padding,
        paddingVertical: responsiveHeight(3)
    },
    activeChip: {
        backgroundColor: '#ECF9F8',
        color: ThemeColor,
        paddingHorizontal: 25,
        paddingVertical: 8,
        fontWeight: '600',
        fontSize: 17,
        borderRadius: 15
      }
})