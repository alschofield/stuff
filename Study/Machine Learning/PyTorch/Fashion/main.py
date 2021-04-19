import os
import sys
import torch
from torch import nn
from torch.utils.data import DataLoader
import torchvision.models as models

from neural_network import NeuralNetwork
from dataset import training_data, test_data
from training import train_loop, test_loop

device = 'cuda' if torch.cuda.is_available() else 'cpu'
model = NeuralNetwork().to(device)

if os.path.isfile('fashion_model.pth'):
  model.load_state_dict(torch.load('fashion_model.pth'))
  model.eval()

train_dataloader = DataLoader(training_data, batch_size=64, shuffle=True)
test_dataloader = DataLoader(test_data, batch_size=64, shuffle=True)

learning_rate = 1e-3
batch_size = 64
epochs = 15

loss_fn = nn.CrossEntropyLoss()
optimizer = torch.optim.SGD(model.parameters(), lr=learning_rate)

for t in range(epochs):
    print(f"Epoch {t+1}\n-------------------------------")
    train_loop(train_dataloader, model, loss_fn, optimizer)
    test_loop(test_dataloader, model, loss_fn)

torch.save(model.state_dict(), 'fashion_model.pth')
print("Done!")
