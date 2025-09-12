def test_dashboard_page(client):
    """Test the Dashboard page."""
    response = client.get('/')
    assert response.status_code == 200