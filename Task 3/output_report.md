
# Customer Purchase Prediction Report

## Overview
This report summarizes the findings and model performance for predicting customer purchase behavior using a Decision Tree Classifier trained on the UCI Bank Marketing dataset.

## Dataset
- **Source**: UCI ML Repository
- **File Used**: `bank-full.csv`
- **Total Records**: 45211

## Preprocessing
- Encoded all categorical variables using Label Encoding.
- Split data into training (70%) and testing (30%).

## Model
- **Classifier**: Decision Tree
- **Max Depth**: 5
- **Random State**: 42

## Evaluation Metrics
- **Accuracy**: 0.8951
- **Precision (Yes)**: 57.98%
- **Recall (Yes)**: 39.80%
- **F1 Score (Yes)**: 47.20%

## Confusion Matrix
![Confusion Matrix](confusion_matrix_plot.png)

## Decision Tree Visualization
![Decision Tree](decision_tree_plot.png)

## Classification Report (Full)

```
              precision    recall  f1-score   support

           0       0.92      0.96      0.94     11966
           1       0.58      0.40      0.47      1598

    accuracy                           0.90     13564
   macro avg       0.75      0.68      0.71     13564
weighted avg       0.88      0.90      0.89     13564

```
