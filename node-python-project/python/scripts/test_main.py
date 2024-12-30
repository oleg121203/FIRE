import unittest

class TestMain(unittest.TestCase):
    def test_hello_world(self):
        self.assertEqual("Hello, World!", "Hello, World!")

    def test_sample(self):
        assert True

if __name__ == '__main__':
    unittest.main()