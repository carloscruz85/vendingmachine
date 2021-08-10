# Vending Machine

# Requeriments:

Single Page Application Test (ReactJs)
The goal of this assignment is for you to create a single page application in ReactJs to help an
end-user manage the simulation of a vending machine capable of asynchronous requests.
Write a program to mock a vending machine, you send/insert orders into the machine and it
should prepare/output your selection. Each selection of “food” should compute differently into
the machine, hence, take more or less time to prepare.
On app load, the end user is presented with a list of products that you need to get from this api:

https://vending-machine-test.vercel.app/api/products

Please show a loading image/image while the app is requesting the products. If the request fails
for any reason, please show an error message to the user.
After getting all the products the user can select one and ask this product to be dispatched (the
user can request more products to be dispatched while other products are being dispatched).
And the app should display the items that have been selected, the time left for these to be
dispatched and also show a list with items that have been dispatched.
Example:
• User selects “x” item from the machine.
• Machine takes the order for item “x” and starts processing it.
• Based on the selection the machine should take “y” amount of time to prepare it.
• While preparing any selection the machine should be able to accept more orders
of the same or other items.

Orders should be dispatched as soon as they are ready, regardless of the order they
were requested.
Please create and share with us a public git repository to save the progress of your project by
making commits for every milestone necessary to track your progress.