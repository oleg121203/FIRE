import unittest
from src.python.scripts.main import your_function  # Замените на вашу функцию

class TestMain(unittest.TestCase):
    def test_your_function(self):
        self.assertEqual(your_function(args), expected_result)  # Замените на ваши аргументы и ожидаемый результат

if __name__ == '__main__':
    unittest.main()