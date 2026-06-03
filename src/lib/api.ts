const API_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:8000/api/v1';

class ApiError extends Error {
  status: number;

  constructor(message: string, status: number) {
    super(message);
    this.name = 'ApiError';
    this.status = status;
  }
}

async function request<T>(
  endpoint: string,
  options?: RequestInit,
): Promise<T> {
  const url = `${API_URL}${endpoint}`;

  const res = await fetch(url, {
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
      ...options?.headers,
    },
    ...options,
  });

  if (!res.ok) {
    const errorMessages: Record<number, string> = {
      400: 'طلب غير صحيح. يرجى التحقق من البيانات.',
      404: 'المعلومات المطلوبة غير موجودة.',
      409: 'هذا البيانات مسجلة بالفعل.',
      422: 'البيانات المدخلة غير صالحة. يرجى التحقق منها.',
      429: 'طلبات كثيرة جداً. يرجى المحاولة لاحقاً.',
      500: 'حدث خطأ في الخادم. يرجى المحاولة لاحقاً.',
    };

    const message =
      errorMessages[res.status] || 'حدث خطأ غير متوقع. يرجى المحاولة مرة أخرى.';
    throw new ApiError(message, res.status);
  }

  return res.json();
}

export interface ContactData {
  name: string;
  phone: string;
  email?: string;
  message: string;
}

export interface BookingData {
  name: string;
  phone: string;
  email?: string;
  course?: string;
  message?: string;
}

export function submitContact(data: ContactData): Promise<{ message: string }> {
  return request('/contact', {
    method: 'POST',
    body: JSON.stringify(data),
  });
}

export function submitBooking(data: BookingData): Promise<{ message: string }> {
  return request('/bookings', {
    method: 'POST',
    body: JSON.stringify(data),
  });
}

export function getTestimonials(): Promise<{ data: unknown[] }> {
  return request('/testimonials');
}

export function getCourses(): Promise<{ data: unknown[] }> {
  return request('/courses');
}

export function getServices(): Promise<{ data: unknown[] }> {
  return request('/services');
}
