package Project;

import java.io.FileInputStream;
import java.io.IOException;
import java.util.Properties;

public class LoadProp extends BasePage {
    static Properties prop;
    static FileInputStream input;

    public String getProperty(String key){
        // we made an object prop for the class Properties
        prop = new Properties();

        try {
            // here we made a new object input from FileInputStream class and gave the path for TestData file
            input = new FileInputStream("src\\test\\Resources\\TestData\\TestDataConfig.properties");
            // here the object prop is getting loaded with info from TestData file into the object input
            prop.load(input);
            // here the info loaded tin the object input closes
            input.close();
        }
        catch (IOException e) {
            e.printStackTrace();
        }
        // here the object prop returns with the key - we will be using this as an in-built method when calling the info from TestData file
        return prop.getProperty(key);
    }
}