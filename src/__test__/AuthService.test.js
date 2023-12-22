// AuthService.test.js
import AuthService from '../services/authService';

describe('AuthService', () => {
    it('should handle sign in failure with user not found error', async () => {
        try {
            // Assuming that the email and password used here will result in "user not found" error
            await AuthService.signIn('nonexistent@example.com', 'password123');


            expect(true).toBeFalsy();
        } catch (error) {

            console.error(error.message);

            // Expect the error message to be 'user not found'
            expect(error.message).toBe('user not found');
        }
    });
});
