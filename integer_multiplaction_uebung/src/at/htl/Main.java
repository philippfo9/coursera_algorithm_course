package at.htl;

import java.math.BigDecimal;
import java.math.BigInteger;

public class Main {

    public static void main(String[] args) {
        BigInteger first = new BigInteger("3141592653589793238462643383279502884197169399375105820974944592");
        BigInteger second = new BigInteger("2718281828459045235360287471352662497757247093699959574966967627");
        System.out.println(first.multiply(second));
        System.out.println(karatsuba(first, second));
        System.out.println(karatsubaTwo(1234,5678));
        System.out.println(karatsuba(new BigInteger("1234"), new BigInteger("5678")));

    }

    public static BigInteger karatsuba(BigInteger one, BigInteger two) {
        BigInteger integer = new BigInteger("10");
        if(one.compareTo(integer) == -1 || two.compareTo(integer) == -1) {
            return one.multiply(two);
        }

        String s1 = one.toString();
        Integer n1Size = s1.length();

        String s2 = two.toString();
        Integer n2Size = s2.length();

        Integer halfN = Math.max(n1Size, n2Size)/2;

        Integer splitX = n1Size-halfN;
        Integer splitY = n2Size-halfN;

        BigInteger firstHalf = new BigInteger(s1.substring(0, splitX));
        BigInteger secondHalf = new BigInteger(s1.substring(splitX));
        BigInteger thirdHalf = new BigInteger(s2.substring(0, splitY));
        BigInteger fourthHalf = new BigInteger(s2.substring(splitY));

        BigInteger firstRes = karatsuba(secondHalf, fourthHalf);
        BigInteger secondRes = karatsuba(firstHalf.add(secondHalf), thirdHalf.add(fourthHalf));
        BigInteger thirdRes = karatsuba(firstHalf, thirdHalf);


        return  thirdRes.multiply(new BigInteger("10").pow(halfN*2)).add(secondRes.min(firstRes).min(thirdRes).multiply(new BigInteger("10").pow(halfN))).add(thirdRes);
    }

    public static long karatsubaTwo(long x, long y){
        //base case:
        if (x < 10 || y < 10) return x * y;

        //length of digits:
        int xSize = String.valueOf(x).length();
        int ySize = String.valueOf(y).length();
        int halfN     = Math.max(xSize, ySize) / 2; // store N/2 instead of N
        int splitX = xSize - halfN;  // count the split point from xSize down
        int splitY = ySize - halfN;  // count the split point from ySize down

        //split each number in half (by length of digits):
        long numX_hi = Long.valueOf((String.valueOf(x).substring(0, splitX)));
        long numX_lo = Long.valueOf((String.valueOf(x).substring(splitX)));
        long numY_hi = Long.valueOf((String.valueOf(y).substring(0, splitY)));
        long numY_lo = Long.valueOf((String.valueOf(y).substring(splitY)));

        //solve multiplications recursively:
        long z0 = karatsubaTwo(numX_lo,numY_lo);
        long z1 = karatsubaTwo((numX_hi+numX_lo),(numY_hi+numY_lo));
        long z2 = karatsubaTwo(numX_hi,numY_hi);

        //answer:
        return  (long)(z2 * Math.pow(10,halfN*2))  +  (long)((z1-z2-z0) * Math.pow(10,halfN))  +  (z0);
    }
}
