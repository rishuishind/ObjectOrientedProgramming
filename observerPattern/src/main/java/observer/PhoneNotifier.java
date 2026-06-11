package main.java.observer;

public class PhoneNotifier implements Observer {

    private String phoneNumber;

    public PhoneNotifier(String phone) {
        this.phoneNumber = phone;
    }

    @Override
    public void update() {
        sendPhoneNotification(phoneNumber, "Product is in stock please hurry up!!");
    }

    private void sendPhoneNotification(String phone, String msg) {
        System.out.println("Message sent to :" + phone + " Message: " + msg);
    }

}
