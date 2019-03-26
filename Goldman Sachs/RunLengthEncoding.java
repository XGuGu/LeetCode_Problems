Given an input string, write a function that returns the Run Length Encoded string for the input string.
For example, if the input string is “wwwwaaadexxxxxx”, then the function should return “w4a3d1e1x6”.


public class RunLength_Encoding {
    public static void printRLE(String str)
    {
        int n = str.length();
        for (int i = 0; i < n; i++) {

            // Count occurrences of current character
            int count = 1;
            while (i < n - 1 &&
                   str.charAt(i) == str.charAt(i + 1)) {
                count++;
                i++;
            }

            // Print character and its count
            System.out.print(str.charAt(i));
            System.out.print(count);
        }
    }

    public static void main(String[] args)
    {
        String str = "wwwwaaadexxxxxxywww";
        printRLE(str);
    }
} 
