import { COLORS, FONT_SIZE } from "../../constants/theme.js";

export const styles = {
    container: {
        flex: 1,
        justifyContent: 'space-between', 
        alignItems: 'center', 
        paddingTop: 80, 
        backgroundColor: COLORS.white
    },

    containerLogo:{ 
        alignItems: "center"
    },
    logo: {
        width: 200,
        height: 40
    },
        
    containerInput: {
        marginBotton: 50,
    },

    input: {
        backgroundColor: COLORS.gray5,
        padding: 10,
        borderRadius: 6 
    }
   
};
