# docs: import tensorflow
# me: hah easy, get rekt
import tensorflow as tf

# docs: Load and prepare the MNIST dataset. Convert the samples from integers to floating-point numbers
# me: for sure, so get data, convert x data to floats, not 100% sure why x and why floats rn,
# decimals are nice and probably important here so that makes sense
# 
mnist = tf.keras.datasets.mnist

(x_train, y_train),(x_test, y_test) = mnist.load_data()
x_train, x_test = x_train / 255.0, x_test / 255.0

# docs: Build the tf.keras.Sequential model by stacking layers.
# me: okay so this clearly creates the 'algorithm'
# looks like matrix math stuff, each layer is a matrix i think, that will end up being used when evaluations are run on the model or when the model is trained i think
model = tf.keras.models.Sequential([
  tf.keras.layers.Flatten(input_shape=(28, 28)),
  tf.keras.layers.Dense(128, activation='relu'),
  tf.keras.layers.Dropout(0.2),
  tf.keras.layers.Dense(10, activation='softmax')
])

# docs: Choose an optimizer and loss function for training
# me: ummm, i think i have vague knowledge of loss functions from the past, i believe the loss function is what actually ends up making the 'predictions', its what changes when the model is 'trained', like gradient descent would be a super basic one i think
# no idea about optimizers right now
model.compile(optimizer='adam',
              loss='sparse_categorical_crossentropy',
              metrics=['accuracy'])

# docs: The Model.fit method adjusts the model parameters to minimize the loss
# me: so i think this is what 'trains' the model/loss function
model.fit(x_train, y_train, epochs=5)

# docs: The Model.evaluate method checks the models performance, usually on a "Validation-set" or "Test-set".
# me: so this is what actually tests the models accuracy i believe, kind of straight forward
model.evaluate(x_test, y_test)
