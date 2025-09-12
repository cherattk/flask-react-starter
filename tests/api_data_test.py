def test_api_endpoint_get_data(client):
    """Test Controller REST API."""
    response = client.get('/api/mydata/')
    assert response.status_code == 200