# Generated by Django 5.0.6 on 2024-07-08 07:42

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('app', '0001_initial'),
    ]

    operations = [
        migrations.RenameField(
            model_name='recipes',
            old_name='name',
            new_name='dish_name',
        ),
    ]