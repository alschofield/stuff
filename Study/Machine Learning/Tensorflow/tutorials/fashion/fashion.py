# import tensorflow and other useful libraries
import tensorflow as tf
import numpy as np
import matplotlib.pyplot as plt

# PULL, CLEAN, AND CURATE DATA

# me: pull fashion mnist data set (mnist is a digit database commonly used for training various image processing systems)
fashion_mnist = tf.keras.datasets.fashion_mnist

# me: load in data from mnist dataset
(train_images, train_labels), (test_images, test_labels) = fashion_mnist.load_data()

# docs:
# Loading the dataset returns four NumPy arrays:
# - The train_images and train_labels arrays are the training set—the data the model uses to learn.
# - The model is tested against the test set, the test_images, and test_labels arrays.

# docs: The images are 28x28 NumPy arrays, with pixel values ranging from 0 to 255. The labels are an array of integers, ranging from 0 to 9.

# me: labels are not stored with dataset so store locally in memorty
class_names = ['T-shirt/top', 'Trouser', 'Pullover', 'Dress', 'Coat',
               'Sandal', 'Shirt', 'Sneaker', 'Bag', 'Ankle boot']

# docs reformated by me:
# the pixel values fall in the range of 0 to 255 so scale these values to a range of 0 to 1 before feeding them to the neural network model
train_images = train_images / 255.0
test_images = test_images / 255.0

# CREATE NEURAL NETWORK

# set up layers
# docs: 
# The basic building block of a neural network is the layer. Layers extract representations from the data fed into them. Hopefully, these representations are meaningful for the problem at hand.
# Most of deep learning consists of chaining together simple layers. Most layers, such as tf.keras.layers.Dense, have parameters that are learned during training.

# me:
# layers used here (info from docs and reformated):
#   - Flatten - transforms the format of the images from a two-dimensional array (of 28 by 28 pixels) to a one-dimensional array (of 28 * 28 = 784 pixels). Think of this layer as unstacking rows of pixels in the image and lining them up. This layer has no parameters to learn; it only reformats the data.
#   - Dense - The first Dense layer has 128 nodes (or neurons). The second (and last) layer returns a logits array with length of 10. Each node contains a score that indicates the current image belongs to one of the 10 classes. (not sure about this)
model = tf.keras.Sequential([
    tf.keras.layers.Flatten(input_shape=(28, 28)),
    tf.keras.layers.Dense(128, activation='relu'),
    tf.keras.layers.Dense(10)
])

# docs: 
# Before the model is ready for training, it needs a few more settings. These are added during the model's compile step:
#   - Loss function — This measures how accurate the model is during training. You want to minimize this function to "steer" the model in the right direction.
#   - Optimizer     — This is how the model is updated based on the data it sees and its loss function.
#   - Metrics       — Used to monitor the training and testing steps. The following example uses accuracy, the fraction of the images that are correctly classified.
model.compile(optimizer='adam',
              loss=tf.keras.losses.SparseCategoricalCrossentropy(from_logits=True),
              metrics=['accuracy'])

# docs:
# Training the neural network model requires the following steps:
#   - 1.) Feed the training data to the model. In this example, the training data is in the train_images and train_labels arrays.
#   - 2.) The model learns to associate images and labels.
#   - 3.) You ask the model to make predictions about a test set—in this example, the test_images array.
#   - 4.) Verify that the predictions match the labels from the test_labels array.

# docs: To start training, call the model.fit method—so called because it "fits" the model to the training data
# As the model trains, the loss and accuracy metrics are displayed. This model reaches an accuracy of about 0.91 (or 91%) on the training data.
# me: seems to be tf behind the scenes training, run the method and it does the rest for you, presumabley it takes the data set and runs it through the layers,
# modifying the loss function and maybe some of the layers if it is called for
model.fit(train_images, train_labels, epochs=10)

# docs: Next, compare how the model performs on the test dataset:
test_loss, test_acc = model.evaluate(test_images,  test_labels, verbose=2)
print('\nTest accuracy:', test_acc)

# PREDICTIONS (a bit confused on what exactly this stuff is doing behind the scenes but we move forward and will probably figure out later)
# docs: logits (need to know info)
# The vector of raw (non-normalized) predictions that a classification model generates, which is ordinarily then passed to a normalization function. If the model is solving a multi-class classification problem, logits typically become an input to the softmax function. The softmax function then generates a vector of (normalized) probabilities with one value for each possible class.
# The model's linear outputs, logits. Attach a softmax layer to convert the logits to probabilities, which are easier to interpret.
probability_model = tf.keras.Sequential([model, 
                                         tf.keras.layers.Softmax()])

# me: use prediction model to create predictions from test data
predictions = probability_model.predict(test_images)

# docs: A prediction is an array of 10 numbers. They represent the model's "confidence" that the image corresponds to each of the 10 different articles of clothing. You can see which label has the highest confidence value
np.argmax(predictions[0])

# docs: Finally, use the trained model to make a prediction about a single image.
img = test_images[1]

# docs: Add the image to a batch where it's the only member.
img = (np.expand_dims(img,0))

# docs: Now predict the correct label for this image
predictions_single = probability_model.predict(img)

# docs: tf.keras.Model.predict returns a list of lists—one list for each image in the batch of data. Grab the predictions for our (only) image in the batch
prediction = np.argmax(predictions_single[0])

print(prediction)

# me:
# lessons/personal insights
# - going to need to spend a lot of time on the different layers, how they work, why they are used, the actual algo being used, etc etc, gonna be a bitch

# pattern noticed - get data set, turn data set to numbers, scale numbers to 0-1, feed numbers to nueral net
#   this means all inputs ie visual/audio/or anything else, just needs to return some sort of number or set of nummbers that presumabley match some sort of critieria
