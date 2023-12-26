    #include <iostream>
    #include <vector>
    using namespace std;
    vector<int> twoSum(vector<int>& numbers, int target) {
        vector<int>v;
        int left=0, right=numbers.size()-1;
        while(left < right){
            if(numbers[left]+numbers[right] > target)right--;
            else if(numbers[left]+numbers[right] < target)left++;
            else{
                v.push_back(left+1);
                v.push_back(right+1);
                break;
            }
        }
        return v;
    }

    int main() {
        vector<int> numbersList = {1, 2, 3, 5, 7, 11, 15};
        int targetNumber = 9;

        vector<int> resultIndices = twoSum(numbersList, targetNumber);

        if (!resultIndices.empty()) {
            cout << "Indices with values " << targetNumber << ": {" << resultIndices[0] << ", " << resultIndices[1] << "}\n";
        } else {
            cout << "No such indices found for the sum " << targetNumber << ".\n";
        }

        return 0;
    }
