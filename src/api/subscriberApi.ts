
interface ApiResponse {
  success: boolean;
  message: string;
}

export const SendFeedback = async (option: string, suggestion: string): Promise<ApiResponse> => {
  try {
    const response = await fetch('http://localhost:3001/api/feedback', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ option, suggestion }),
    });
    
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Feedback submission error:', error);
    return {
      success: false,
      message: 'Unable to connect to the server. Please try again later.',
    };
  }
}

export const loginAdmin = async (username: string, password: string): Promise<{ success: boolean; token?: string; message?: string }> => {
  try {
    const response = await fetch('http://localhost:3001/api/admin/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ username, password }),
    });
    
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Admin login error:', error);
    return {
      success: false,
      message: 'Unable to connect to the server. Please try again later.',
    };
  }
}

export const getFeedbackData = async (token: string): Promise<{ success: boolean; data?: any[]; message?: string }> => {
  try {
    const response = await fetch('http://localhost:3001/api/admin/feedback', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`
      },
    });
    
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Get feedback data error:', error);
    return {
      success: false,
      message: 'Unable to connect to the server. Please try again later.',
    };
  }
}
