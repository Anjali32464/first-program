import unittest
from test import reverse_string,capitalize_string,is_capitalized

class TestStringUtils(unittest.TestCase):
    def test_equal(self):
        result=reverse_string("naman")
        self.assertEqual(result,"naman")

    def test_true(self):
        result=capitalize_string("hello")
        self.assertTrue("h" in result)



if __name__ == '__main__':
    unittest.main()
