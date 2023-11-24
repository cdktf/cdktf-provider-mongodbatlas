# `data_mongodbatlas_federated_settings_identity_provider`

Refer to the Terraform Registory for docs: [`data_mongodbatlas_federated_settings_identity_provider`](https://registry.terraform.io/providers/mongodb/mongodbatlas/1.13.1/docs/data-sources/federated_settings_identity_provider).

# `dataMongodbatlasFederatedSettingsIdentityProvider` Submodule <a name="`dataMongodbatlasFederatedSettingsIdentityProvider` Submodule" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProvider"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataMongodbatlasFederatedSettingsIdentityProvider <a name="DataMongodbatlasFederatedSettingsIdentityProvider" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProvider.DataMongodbatlasFederatedSettingsIdentityProvider"></a>

Represents a {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.13.1/docs/data-sources/federated_settings_identity_provider mongodbatlas_federated_settings_identity_provider}.

#### Initializers <a name="Initializers" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProvider.DataMongodbatlasFederatedSettingsIdentityProvider.Initializer"></a>

```python
from cdktf_cdktf_provider_mongodbatlas import data_mongodbatlas_federated_settings_identity_provider

dataMongodbatlasFederatedSettingsIdentityProvider.DataMongodbatlasFederatedSettingsIdentityProvider(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  federation_settings_id: str,
  identity_provider_id: str,
  id: str = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProvider.DataMongodbatlasFederatedSettingsIdentityProvider.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProvider.DataMongodbatlasFederatedSettingsIdentityProvider.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProvider.DataMongodbatlasFederatedSettingsIdentityProvider.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProvider.DataMongodbatlasFederatedSettingsIdentityProvider.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProvider.DataMongodbatlasFederatedSettingsIdentityProvider.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProvider.DataMongodbatlasFederatedSettingsIdentityProvider.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProvider.DataMongodbatlasFederatedSettingsIdentityProvider.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProvider.DataMongodbatlasFederatedSettingsIdentityProvider.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProvider.DataMongodbatlasFederatedSettingsIdentityProvider.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProvider.DataMongodbatlasFederatedSettingsIdentityProvider.Initializer.parameter.federationSettingsId">federation_settings_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.13.1/docs/data-sources/federated_settings_identity_provider#federation_settings_id DataMongodbatlasFederatedSettingsIdentityProvider#federation_settings_id}. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProvider.DataMongodbatlasFederatedSettingsIdentityProvider.Initializer.parameter.identityProviderId">identity_provider_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.13.1/docs/data-sources/federated_settings_identity_provider#identity_provider_id DataMongodbatlasFederatedSettingsIdentityProvider#identity_provider_id}. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProvider.DataMongodbatlasFederatedSettingsIdentityProvider.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.13.1/docs/data-sources/federated_settings_identity_provider#id DataMongodbatlasFederatedSettingsIdentityProvider#id}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProvider.DataMongodbatlasFederatedSettingsIdentityProvider.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProvider.DataMongodbatlasFederatedSettingsIdentityProvider.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProvider.DataMongodbatlasFederatedSettingsIdentityProvider.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProvider.DataMongodbatlasFederatedSettingsIdentityProvider.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProvider.DataMongodbatlasFederatedSettingsIdentityProvider.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProvider.DataMongodbatlasFederatedSettingsIdentityProvider.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProvider.DataMongodbatlasFederatedSettingsIdentityProvider.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProvider.DataMongodbatlasFederatedSettingsIdentityProvider.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProvider.DataMongodbatlasFederatedSettingsIdentityProvider.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `federation_settings_id`<sup>Required</sup> <a name="federation_settings_id" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProvider.DataMongodbatlasFederatedSettingsIdentityProvider.Initializer.parameter.federationSettingsId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.13.1/docs/data-sources/federated_settings_identity_provider#federation_settings_id DataMongodbatlasFederatedSettingsIdentityProvider#federation_settings_id}.

---

##### `identity_provider_id`<sup>Required</sup> <a name="identity_provider_id" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProvider.DataMongodbatlasFederatedSettingsIdentityProvider.Initializer.parameter.identityProviderId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.13.1/docs/data-sources/federated_settings_identity_provider#identity_provider_id DataMongodbatlasFederatedSettingsIdentityProvider#identity_provider_id}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProvider.DataMongodbatlasFederatedSettingsIdentityProvider.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.13.1/docs/data-sources/federated_settings_identity_provider#id DataMongodbatlasFederatedSettingsIdentityProvider#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProvider.DataMongodbatlasFederatedSettingsIdentityProvider.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProvider.DataMongodbatlasFederatedSettingsIdentityProvider.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProvider.DataMongodbatlasFederatedSettingsIdentityProvider.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProvider.DataMongodbatlasFederatedSettingsIdentityProvider.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProvider.DataMongodbatlasFederatedSettingsIdentityProvider.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProvider.DataMongodbatlasFederatedSettingsIdentityProvider.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProvider.DataMongodbatlasFederatedSettingsIdentityProvider.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProvider.DataMongodbatlasFederatedSettingsIdentityProvider.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProvider.DataMongodbatlasFederatedSettingsIdentityProvider.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProvider.DataMongodbatlasFederatedSettingsIdentityProvider.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProvider.DataMongodbatlasFederatedSettingsIdentityProvider.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProvider.DataMongodbatlasFederatedSettingsIdentityProvider.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProvider.DataMongodbatlasFederatedSettingsIdentityProvider.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProvider.DataMongodbatlasFederatedSettingsIdentityProvider.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProvider.DataMongodbatlasFederatedSettingsIdentityProvider.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProvider.DataMongodbatlasFederatedSettingsIdentityProvider.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProvider.DataMongodbatlasFederatedSettingsIdentityProvider.resetId">reset_id</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProvider.DataMongodbatlasFederatedSettingsIdentityProvider.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProvider.DataMongodbatlasFederatedSettingsIdentityProvider.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProvider.DataMongodbatlasFederatedSettingsIdentityProvider.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProvider.DataMongodbatlasFederatedSettingsIdentityProvider.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProvider.DataMongodbatlasFederatedSettingsIdentityProvider.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProvider.DataMongodbatlasFederatedSettingsIdentityProvider.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProvider.DataMongodbatlasFederatedSettingsIdentityProvider.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProvider.DataMongodbatlasFederatedSettingsIdentityProvider.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProvider.DataMongodbatlasFederatedSettingsIdentityProvider.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProvider.DataMongodbatlasFederatedSettingsIdentityProvider.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProvider.DataMongodbatlasFederatedSettingsIdentityProvider.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProvider.DataMongodbatlasFederatedSettingsIdentityProvider.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProvider.DataMongodbatlasFederatedSettingsIdentityProvider.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProvider.DataMongodbatlasFederatedSettingsIdentityProvider.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProvider.DataMongodbatlasFederatedSettingsIdentityProvider.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProvider.DataMongodbatlasFederatedSettingsIdentityProvider.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProvider.DataMongodbatlasFederatedSettingsIdentityProvider.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProvider.DataMongodbatlasFederatedSettingsIdentityProvider.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProvider.DataMongodbatlasFederatedSettingsIdentityProvider.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProvider.DataMongodbatlasFederatedSettingsIdentityProvider.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProvider.DataMongodbatlasFederatedSettingsIdentityProvider.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProvider.DataMongodbatlasFederatedSettingsIdentityProvider.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProvider.DataMongodbatlasFederatedSettingsIdentityProvider.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProvider.DataMongodbatlasFederatedSettingsIdentityProvider.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProvider.DataMongodbatlasFederatedSettingsIdentityProvider.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProvider.DataMongodbatlasFederatedSettingsIdentityProvider.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProvider.DataMongodbatlasFederatedSettingsIdentityProvider.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProvider.DataMongodbatlasFederatedSettingsIdentityProvider.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProvider.DataMongodbatlasFederatedSettingsIdentityProvider.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `reset_id` <a name="reset_id" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProvider.DataMongodbatlasFederatedSettingsIdentityProvider.resetId"></a>

```python
def reset_id() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProvider.DataMongodbatlasFederatedSettingsIdentityProvider.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProvider.DataMongodbatlasFederatedSettingsIdentityProvider.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProvider.DataMongodbatlasFederatedSettingsIdentityProvider.isTerraformDataSource">is_terraform_data_source</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProvider.DataMongodbatlasFederatedSettingsIdentityProvider.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a DataMongodbatlasFederatedSettingsIdentityProvider resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProvider.DataMongodbatlasFederatedSettingsIdentityProvider.isConstruct"></a>

```python
from cdktf_cdktf_provider_mongodbatlas import data_mongodbatlas_federated_settings_identity_provider

dataMongodbatlasFederatedSettingsIdentityProvider.DataMongodbatlasFederatedSettingsIdentityProvider.is_construct(
  x: typing.Any
)
```

Checks if `x` is a construct.

Use this method instead of `instanceof` to properly detect `Construct`
instances, even when the construct library is symlinked.

Explanation: in JavaScript, multiple copies of the `constructs` library on
disk are seen as independent, completely different libraries. As a
consequence, the class `Construct` in each copy of the `constructs` library
is seen as a different class, and an instance of one class will not test as
`instanceof` the other class. `npm install` will not create installations
like this, but users may manually symlink construct libraries together or
use a monorepo tool: in those cases, multiple copies of the `constructs`
library can be accidentally installed, and `instanceof` will behave
unpredictably. It is safest to avoid using `instanceof`, and using
this type-testing method instead.

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProvider.DataMongodbatlasFederatedSettingsIdentityProvider.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProvider.DataMongodbatlasFederatedSettingsIdentityProvider.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_mongodbatlas import data_mongodbatlas_federated_settings_identity_provider

dataMongodbatlasFederatedSettingsIdentityProvider.DataMongodbatlasFederatedSettingsIdentityProvider.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProvider.DataMongodbatlasFederatedSettingsIdentityProvider.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_data_source` <a name="is_terraform_data_source" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProvider.DataMongodbatlasFederatedSettingsIdentityProvider.isTerraformDataSource"></a>

```python
from cdktf_cdktf_provider_mongodbatlas import data_mongodbatlas_federated_settings_identity_provider

dataMongodbatlasFederatedSettingsIdentityProvider.DataMongodbatlasFederatedSettingsIdentityProvider.is_terraform_data_source(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProvider.DataMongodbatlasFederatedSettingsIdentityProvider.isTerraformDataSource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProvider.DataMongodbatlasFederatedSettingsIdentityProvider.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_mongodbatlas import data_mongodbatlas_federated_settings_identity_provider

dataMongodbatlasFederatedSettingsIdentityProvider.DataMongodbatlasFederatedSettingsIdentityProvider.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a DataMongodbatlasFederatedSettingsIdentityProvider resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProvider.DataMongodbatlasFederatedSettingsIdentityProvider.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProvider.DataMongodbatlasFederatedSettingsIdentityProvider.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the DataMongodbatlasFederatedSettingsIdentityProvider to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProvider.DataMongodbatlasFederatedSettingsIdentityProvider.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing DataMongodbatlasFederatedSettingsIdentityProvider that should be imported.

Refer to the {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.13.1/docs/data-sources/federated_settings_identity_provider#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProvider.DataMongodbatlasFederatedSettingsIdentityProvider.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataMongodbatlasFederatedSettingsIdentityProvider to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProvider.DataMongodbatlasFederatedSettingsIdentityProvider.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProvider.DataMongodbatlasFederatedSettingsIdentityProvider.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProvider.DataMongodbatlasFederatedSettingsIdentityProvider.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProvider.DataMongodbatlasFederatedSettingsIdentityProvider.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProvider.DataMongodbatlasFederatedSettingsIdentityProvider.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProvider.DataMongodbatlasFederatedSettingsIdentityProvider.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProvider.DataMongodbatlasFederatedSettingsIdentityProvider.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProvider.DataMongodbatlasFederatedSettingsIdentityProvider.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProvider.DataMongodbatlasFederatedSettingsIdentityProvider.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProvider.DataMongodbatlasFederatedSettingsIdentityProvider.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProvider.DataMongodbatlasFederatedSettingsIdentityProvider.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProvider.DataMongodbatlasFederatedSettingsIdentityProvider.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProvider.DataMongodbatlasFederatedSettingsIdentityProvider.property.acsUrl">acs_url</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProvider.DataMongodbatlasFederatedSettingsIdentityProvider.property.associatedDomains">associated_domains</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProvider.DataMongodbatlasFederatedSettingsIdentityProvider.property.associatedOrgs">associated_orgs</a></code> | <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProvider.DataMongodbatlasFederatedSettingsIdentityProviderAssociatedOrgsList">DataMongodbatlasFederatedSettingsIdentityProviderAssociatedOrgsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProvider.DataMongodbatlasFederatedSettingsIdentityProvider.property.audienceUri">audience_uri</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProvider.DataMongodbatlasFederatedSettingsIdentityProvider.property.displayName">display_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProvider.DataMongodbatlasFederatedSettingsIdentityProvider.property.issuerUri">issuer_uri</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProvider.DataMongodbatlasFederatedSettingsIdentityProvider.property.oktaIdpId">okta_idp_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProvider.DataMongodbatlasFederatedSettingsIdentityProvider.property.pemFileInfo">pem_file_info</a></code> | <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProvider.DataMongodbatlasFederatedSettingsIdentityProviderPemFileInfoList">DataMongodbatlasFederatedSettingsIdentityProviderPemFileInfoList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProvider.DataMongodbatlasFederatedSettingsIdentityProvider.property.requestBinding">request_binding</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProvider.DataMongodbatlasFederatedSettingsIdentityProvider.property.responseSignatureAlgorithm">response_signature_algorithm</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProvider.DataMongodbatlasFederatedSettingsIdentityProvider.property.ssoDebugEnabled">sso_debug_enabled</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProvider.DataMongodbatlasFederatedSettingsIdentityProvider.property.ssoUrl">sso_url</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProvider.DataMongodbatlasFederatedSettingsIdentityProvider.property.status">status</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProvider.DataMongodbatlasFederatedSettingsIdentityProvider.property.federationSettingsIdInput">federation_settings_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProvider.DataMongodbatlasFederatedSettingsIdentityProvider.property.identityProviderIdInput">identity_provider_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProvider.DataMongodbatlasFederatedSettingsIdentityProvider.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProvider.DataMongodbatlasFederatedSettingsIdentityProvider.property.federationSettingsId">federation_settings_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProvider.DataMongodbatlasFederatedSettingsIdentityProvider.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProvider.DataMongodbatlasFederatedSettingsIdentityProvider.property.identityProviderId">identity_provider_id</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProvider.DataMongodbatlasFederatedSettingsIdentityProvider.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProvider.DataMongodbatlasFederatedSettingsIdentityProvider.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProvider.DataMongodbatlasFederatedSettingsIdentityProvider.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProvider.DataMongodbatlasFederatedSettingsIdentityProvider.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProvider.DataMongodbatlasFederatedSettingsIdentityProvider.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProvider.DataMongodbatlasFederatedSettingsIdentityProvider.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProvider.DataMongodbatlasFederatedSettingsIdentityProvider.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProvider.DataMongodbatlasFederatedSettingsIdentityProvider.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProvider.DataMongodbatlasFederatedSettingsIdentityProvider.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProvider.DataMongodbatlasFederatedSettingsIdentityProvider.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProvider.DataMongodbatlasFederatedSettingsIdentityProvider.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProvider.DataMongodbatlasFederatedSettingsIdentityProvider.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `acs_url`<sup>Required</sup> <a name="acs_url" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProvider.DataMongodbatlasFederatedSettingsIdentityProvider.property.acsUrl"></a>

```python
acs_url: str
```

- *Type:* str

---

##### `associated_domains`<sup>Required</sup> <a name="associated_domains" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProvider.DataMongodbatlasFederatedSettingsIdentityProvider.property.associatedDomains"></a>

```python
associated_domains: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `associated_orgs`<sup>Required</sup> <a name="associated_orgs" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProvider.DataMongodbatlasFederatedSettingsIdentityProvider.property.associatedOrgs"></a>

```python
associated_orgs: DataMongodbatlasFederatedSettingsIdentityProviderAssociatedOrgsList
```

- *Type:* <a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProvider.DataMongodbatlasFederatedSettingsIdentityProviderAssociatedOrgsList">DataMongodbatlasFederatedSettingsIdentityProviderAssociatedOrgsList</a>

---

##### `audience_uri`<sup>Required</sup> <a name="audience_uri" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProvider.DataMongodbatlasFederatedSettingsIdentityProvider.property.audienceUri"></a>

```python
audience_uri: str
```

- *Type:* str

---

##### `display_name`<sup>Required</sup> <a name="display_name" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProvider.DataMongodbatlasFederatedSettingsIdentityProvider.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

---

##### `issuer_uri`<sup>Required</sup> <a name="issuer_uri" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProvider.DataMongodbatlasFederatedSettingsIdentityProvider.property.issuerUri"></a>

```python
issuer_uri: str
```

- *Type:* str

---

##### `okta_idp_id`<sup>Required</sup> <a name="okta_idp_id" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProvider.DataMongodbatlasFederatedSettingsIdentityProvider.property.oktaIdpId"></a>

```python
okta_idp_id: str
```

- *Type:* str

---

##### `pem_file_info`<sup>Required</sup> <a name="pem_file_info" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProvider.DataMongodbatlasFederatedSettingsIdentityProvider.property.pemFileInfo"></a>

```python
pem_file_info: DataMongodbatlasFederatedSettingsIdentityProviderPemFileInfoList
```

- *Type:* <a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProvider.DataMongodbatlasFederatedSettingsIdentityProviderPemFileInfoList">DataMongodbatlasFederatedSettingsIdentityProviderPemFileInfoList</a>

---

##### `request_binding`<sup>Required</sup> <a name="request_binding" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProvider.DataMongodbatlasFederatedSettingsIdentityProvider.property.requestBinding"></a>

```python
request_binding: str
```

- *Type:* str

---

##### `response_signature_algorithm`<sup>Required</sup> <a name="response_signature_algorithm" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProvider.DataMongodbatlasFederatedSettingsIdentityProvider.property.responseSignatureAlgorithm"></a>

```python
response_signature_algorithm: str
```

- *Type:* str

---

##### `sso_debug_enabled`<sup>Required</sup> <a name="sso_debug_enabled" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProvider.DataMongodbatlasFederatedSettingsIdentityProvider.property.ssoDebugEnabled"></a>

```python
sso_debug_enabled: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `sso_url`<sup>Required</sup> <a name="sso_url" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProvider.DataMongodbatlasFederatedSettingsIdentityProvider.property.ssoUrl"></a>

```python
sso_url: str
```

- *Type:* str

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProvider.DataMongodbatlasFederatedSettingsIdentityProvider.property.status"></a>

```python
status: str
```

- *Type:* str

---

##### `federation_settings_id_input`<sup>Optional</sup> <a name="federation_settings_id_input" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProvider.DataMongodbatlasFederatedSettingsIdentityProvider.property.federationSettingsIdInput"></a>

```python
federation_settings_id_input: str
```

- *Type:* str

---

##### `identity_provider_id_input`<sup>Optional</sup> <a name="identity_provider_id_input" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProvider.DataMongodbatlasFederatedSettingsIdentityProvider.property.identityProviderIdInput"></a>

```python
identity_provider_id_input: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProvider.DataMongodbatlasFederatedSettingsIdentityProvider.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `federation_settings_id`<sup>Required</sup> <a name="federation_settings_id" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProvider.DataMongodbatlasFederatedSettingsIdentityProvider.property.federationSettingsId"></a>

```python
federation_settings_id: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProvider.DataMongodbatlasFederatedSettingsIdentityProvider.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `identity_provider_id`<sup>Required</sup> <a name="identity_provider_id" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProvider.DataMongodbatlasFederatedSettingsIdentityProvider.property.identityProviderId"></a>

```python
identity_provider_id: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProvider.DataMongodbatlasFederatedSettingsIdentityProvider.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProvider.DataMongodbatlasFederatedSettingsIdentityProvider.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DataMongodbatlasFederatedSettingsIdentityProviderAssociatedOrgs <a name="DataMongodbatlasFederatedSettingsIdentityProviderAssociatedOrgs" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProvider.DataMongodbatlasFederatedSettingsIdentityProviderAssociatedOrgs"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProvider.DataMongodbatlasFederatedSettingsIdentityProviderAssociatedOrgs.Initializer"></a>

```python
from cdktf_cdktf_provider_mongodbatlas import data_mongodbatlas_federated_settings_identity_provider

dataMongodbatlasFederatedSettingsIdentityProvider.DataMongodbatlasFederatedSettingsIdentityProviderAssociatedOrgs()
```


### DataMongodbatlasFederatedSettingsIdentityProviderAssociatedOrgsRoleMappings <a name="DataMongodbatlasFederatedSettingsIdentityProviderAssociatedOrgsRoleMappings" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProvider.DataMongodbatlasFederatedSettingsIdentityProviderAssociatedOrgsRoleMappings"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProvider.DataMongodbatlasFederatedSettingsIdentityProviderAssociatedOrgsRoleMappings.Initializer"></a>

```python
from cdktf_cdktf_provider_mongodbatlas import data_mongodbatlas_federated_settings_identity_provider

dataMongodbatlasFederatedSettingsIdentityProvider.DataMongodbatlasFederatedSettingsIdentityProviderAssociatedOrgsRoleMappings()
```


### DataMongodbatlasFederatedSettingsIdentityProviderAssociatedOrgsRoleMappingsRoleAssignments <a name="DataMongodbatlasFederatedSettingsIdentityProviderAssociatedOrgsRoleMappingsRoleAssignments" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProvider.DataMongodbatlasFederatedSettingsIdentityProviderAssociatedOrgsRoleMappingsRoleAssignments"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProvider.DataMongodbatlasFederatedSettingsIdentityProviderAssociatedOrgsRoleMappingsRoleAssignments.Initializer"></a>

```python
from cdktf_cdktf_provider_mongodbatlas import data_mongodbatlas_federated_settings_identity_provider

dataMongodbatlasFederatedSettingsIdentityProvider.DataMongodbatlasFederatedSettingsIdentityProviderAssociatedOrgsRoleMappingsRoleAssignments()
```


### DataMongodbatlasFederatedSettingsIdentityProviderAssociatedOrgsUserConflicts <a name="DataMongodbatlasFederatedSettingsIdentityProviderAssociatedOrgsUserConflicts" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProvider.DataMongodbatlasFederatedSettingsIdentityProviderAssociatedOrgsUserConflicts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProvider.DataMongodbatlasFederatedSettingsIdentityProviderAssociatedOrgsUserConflicts.Initializer"></a>

```python
from cdktf_cdktf_provider_mongodbatlas import data_mongodbatlas_federated_settings_identity_provider

dataMongodbatlasFederatedSettingsIdentityProvider.DataMongodbatlasFederatedSettingsIdentityProviderAssociatedOrgsUserConflicts()
```


### DataMongodbatlasFederatedSettingsIdentityProviderConfig <a name="DataMongodbatlasFederatedSettingsIdentityProviderConfig" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProvider.DataMongodbatlasFederatedSettingsIdentityProviderConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProvider.DataMongodbatlasFederatedSettingsIdentityProviderConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_mongodbatlas import data_mongodbatlas_federated_settings_identity_provider

dataMongodbatlasFederatedSettingsIdentityProvider.DataMongodbatlasFederatedSettingsIdentityProviderConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  federation_settings_id: str,
  identity_provider_id: str,
  id: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProvider.DataMongodbatlasFederatedSettingsIdentityProviderConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProvider.DataMongodbatlasFederatedSettingsIdentityProviderConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProvider.DataMongodbatlasFederatedSettingsIdentityProviderConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProvider.DataMongodbatlasFederatedSettingsIdentityProviderConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProvider.DataMongodbatlasFederatedSettingsIdentityProviderConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProvider.DataMongodbatlasFederatedSettingsIdentityProviderConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProvider.DataMongodbatlasFederatedSettingsIdentityProviderConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProvider.DataMongodbatlasFederatedSettingsIdentityProviderConfig.property.federationSettingsId">federation_settings_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.13.1/docs/data-sources/federated_settings_identity_provider#federation_settings_id DataMongodbatlasFederatedSettingsIdentityProvider#federation_settings_id}. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProvider.DataMongodbatlasFederatedSettingsIdentityProviderConfig.property.identityProviderId">identity_provider_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.13.1/docs/data-sources/federated_settings_identity_provider#identity_provider_id DataMongodbatlasFederatedSettingsIdentityProvider#identity_provider_id}. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProvider.DataMongodbatlasFederatedSettingsIdentityProviderConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.13.1/docs/data-sources/federated_settings_identity_provider#id DataMongodbatlasFederatedSettingsIdentityProvider#id}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProvider.DataMongodbatlasFederatedSettingsIdentityProviderConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProvider.DataMongodbatlasFederatedSettingsIdentityProviderConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProvider.DataMongodbatlasFederatedSettingsIdentityProviderConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProvider.DataMongodbatlasFederatedSettingsIdentityProviderConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProvider.DataMongodbatlasFederatedSettingsIdentityProviderConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProvider.DataMongodbatlasFederatedSettingsIdentityProviderConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProvider.DataMongodbatlasFederatedSettingsIdentityProviderConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `federation_settings_id`<sup>Required</sup> <a name="federation_settings_id" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProvider.DataMongodbatlasFederatedSettingsIdentityProviderConfig.property.federationSettingsId"></a>

```python
federation_settings_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.13.1/docs/data-sources/federated_settings_identity_provider#federation_settings_id DataMongodbatlasFederatedSettingsIdentityProvider#federation_settings_id}.

---

##### `identity_provider_id`<sup>Required</sup> <a name="identity_provider_id" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProvider.DataMongodbatlasFederatedSettingsIdentityProviderConfig.property.identityProviderId"></a>

```python
identity_provider_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.13.1/docs/data-sources/federated_settings_identity_provider#identity_provider_id DataMongodbatlasFederatedSettingsIdentityProvider#identity_provider_id}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProvider.DataMongodbatlasFederatedSettingsIdentityProviderConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.13.1/docs/data-sources/federated_settings_identity_provider#id DataMongodbatlasFederatedSettingsIdentityProvider#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DataMongodbatlasFederatedSettingsIdentityProviderPemFileInfo <a name="DataMongodbatlasFederatedSettingsIdentityProviderPemFileInfo" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProvider.DataMongodbatlasFederatedSettingsIdentityProviderPemFileInfo"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProvider.DataMongodbatlasFederatedSettingsIdentityProviderPemFileInfo.Initializer"></a>

```python
from cdktf_cdktf_provider_mongodbatlas import data_mongodbatlas_federated_settings_identity_provider

dataMongodbatlasFederatedSettingsIdentityProvider.DataMongodbatlasFederatedSettingsIdentityProviderPemFileInfo()
```


### DataMongodbatlasFederatedSettingsIdentityProviderPemFileInfoCertificates <a name="DataMongodbatlasFederatedSettingsIdentityProviderPemFileInfoCertificates" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProvider.DataMongodbatlasFederatedSettingsIdentityProviderPemFileInfoCertificates"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProvider.DataMongodbatlasFederatedSettingsIdentityProviderPemFileInfoCertificates.Initializer"></a>

```python
from cdktf_cdktf_provider_mongodbatlas import data_mongodbatlas_federated_settings_identity_provider

dataMongodbatlasFederatedSettingsIdentityProvider.DataMongodbatlasFederatedSettingsIdentityProviderPemFileInfoCertificates()
```


## Classes <a name="Classes" id="Classes"></a>

### DataMongodbatlasFederatedSettingsIdentityProviderAssociatedOrgsList <a name="DataMongodbatlasFederatedSettingsIdentityProviderAssociatedOrgsList" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProvider.DataMongodbatlasFederatedSettingsIdentityProviderAssociatedOrgsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProvider.DataMongodbatlasFederatedSettingsIdentityProviderAssociatedOrgsList.Initializer"></a>

```python
from cdktf_cdktf_provider_mongodbatlas import data_mongodbatlas_federated_settings_identity_provider

dataMongodbatlasFederatedSettingsIdentityProvider.DataMongodbatlasFederatedSettingsIdentityProviderAssociatedOrgsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProvider.DataMongodbatlasFederatedSettingsIdentityProviderAssociatedOrgsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProvider.DataMongodbatlasFederatedSettingsIdentityProviderAssociatedOrgsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProvider.DataMongodbatlasFederatedSettingsIdentityProviderAssociatedOrgsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProvider.DataMongodbatlasFederatedSettingsIdentityProviderAssociatedOrgsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProvider.DataMongodbatlasFederatedSettingsIdentityProviderAssociatedOrgsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProvider.DataMongodbatlasFederatedSettingsIdentityProviderAssociatedOrgsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProvider.DataMongodbatlasFederatedSettingsIdentityProviderAssociatedOrgsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProvider.DataMongodbatlasFederatedSettingsIdentityProviderAssociatedOrgsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProvider.DataMongodbatlasFederatedSettingsIdentityProviderAssociatedOrgsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProvider.DataMongodbatlasFederatedSettingsIdentityProviderAssociatedOrgsList.get">get</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProvider.DataMongodbatlasFederatedSettingsIdentityProviderAssociatedOrgsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProvider.DataMongodbatlasFederatedSettingsIdentityProviderAssociatedOrgsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProvider.DataMongodbatlasFederatedSettingsIdentityProviderAssociatedOrgsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProvider.DataMongodbatlasFederatedSettingsIdentityProviderAssociatedOrgsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProvider.DataMongodbatlasFederatedSettingsIdentityProviderAssociatedOrgsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataMongodbatlasFederatedSettingsIdentityProviderAssociatedOrgsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProvider.DataMongodbatlasFederatedSettingsIdentityProviderAssociatedOrgsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProvider.DataMongodbatlasFederatedSettingsIdentityProviderAssociatedOrgsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProvider.DataMongodbatlasFederatedSettingsIdentityProviderAssociatedOrgsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProvider.DataMongodbatlasFederatedSettingsIdentityProviderAssociatedOrgsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProvider.DataMongodbatlasFederatedSettingsIdentityProviderAssociatedOrgsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataMongodbatlasFederatedSettingsIdentityProviderAssociatedOrgsOutputReference <a name="DataMongodbatlasFederatedSettingsIdentityProviderAssociatedOrgsOutputReference" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProvider.DataMongodbatlasFederatedSettingsIdentityProviderAssociatedOrgsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProvider.DataMongodbatlasFederatedSettingsIdentityProviderAssociatedOrgsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_mongodbatlas import data_mongodbatlas_federated_settings_identity_provider

dataMongodbatlasFederatedSettingsIdentityProvider.DataMongodbatlasFederatedSettingsIdentityProviderAssociatedOrgsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProvider.DataMongodbatlasFederatedSettingsIdentityProviderAssociatedOrgsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProvider.DataMongodbatlasFederatedSettingsIdentityProviderAssociatedOrgsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProvider.DataMongodbatlasFederatedSettingsIdentityProviderAssociatedOrgsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProvider.DataMongodbatlasFederatedSettingsIdentityProviderAssociatedOrgsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProvider.DataMongodbatlasFederatedSettingsIdentityProviderAssociatedOrgsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProvider.DataMongodbatlasFederatedSettingsIdentityProviderAssociatedOrgsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProvider.DataMongodbatlasFederatedSettingsIdentityProviderAssociatedOrgsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProvider.DataMongodbatlasFederatedSettingsIdentityProviderAssociatedOrgsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProvider.DataMongodbatlasFederatedSettingsIdentityProviderAssociatedOrgsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProvider.DataMongodbatlasFederatedSettingsIdentityProviderAssociatedOrgsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProvider.DataMongodbatlasFederatedSettingsIdentityProviderAssociatedOrgsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProvider.DataMongodbatlasFederatedSettingsIdentityProviderAssociatedOrgsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProvider.DataMongodbatlasFederatedSettingsIdentityProviderAssociatedOrgsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProvider.DataMongodbatlasFederatedSettingsIdentityProviderAssociatedOrgsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProvider.DataMongodbatlasFederatedSettingsIdentityProviderAssociatedOrgsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProvider.DataMongodbatlasFederatedSettingsIdentityProviderAssociatedOrgsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProvider.DataMongodbatlasFederatedSettingsIdentityProviderAssociatedOrgsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProvider.DataMongodbatlasFederatedSettingsIdentityProviderAssociatedOrgsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProvider.DataMongodbatlasFederatedSettingsIdentityProviderAssociatedOrgsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProvider.DataMongodbatlasFederatedSettingsIdentityProviderAssociatedOrgsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProvider.DataMongodbatlasFederatedSettingsIdentityProviderAssociatedOrgsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProvider.DataMongodbatlasFederatedSettingsIdentityProviderAssociatedOrgsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProvider.DataMongodbatlasFederatedSettingsIdentityProviderAssociatedOrgsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProvider.DataMongodbatlasFederatedSettingsIdentityProviderAssociatedOrgsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProvider.DataMongodbatlasFederatedSettingsIdentityProviderAssociatedOrgsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProvider.DataMongodbatlasFederatedSettingsIdentityProviderAssociatedOrgsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProvider.DataMongodbatlasFederatedSettingsIdentityProviderAssociatedOrgsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProvider.DataMongodbatlasFederatedSettingsIdentityProviderAssociatedOrgsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProvider.DataMongodbatlasFederatedSettingsIdentityProviderAssociatedOrgsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProvider.DataMongodbatlasFederatedSettingsIdentityProviderAssociatedOrgsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProvider.DataMongodbatlasFederatedSettingsIdentityProviderAssociatedOrgsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProvider.DataMongodbatlasFederatedSettingsIdentityProviderAssociatedOrgsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProvider.DataMongodbatlasFederatedSettingsIdentityProviderAssociatedOrgsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProvider.DataMongodbatlasFederatedSettingsIdentityProviderAssociatedOrgsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProvider.DataMongodbatlasFederatedSettingsIdentityProviderAssociatedOrgsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProvider.DataMongodbatlasFederatedSettingsIdentityProviderAssociatedOrgsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProvider.DataMongodbatlasFederatedSettingsIdentityProviderAssociatedOrgsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProvider.DataMongodbatlasFederatedSettingsIdentityProviderAssociatedOrgsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProvider.DataMongodbatlasFederatedSettingsIdentityProviderAssociatedOrgsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProvider.DataMongodbatlasFederatedSettingsIdentityProviderAssociatedOrgsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProvider.DataMongodbatlasFederatedSettingsIdentityProviderAssociatedOrgsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProvider.DataMongodbatlasFederatedSettingsIdentityProviderAssociatedOrgsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProvider.DataMongodbatlasFederatedSettingsIdentityProviderAssociatedOrgsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProvider.DataMongodbatlasFederatedSettingsIdentityProviderAssociatedOrgsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProvider.DataMongodbatlasFederatedSettingsIdentityProviderAssociatedOrgsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProvider.DataMongodbatlasFederatedSettingsIdentityProviderAssociatedOrgsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProvider.DataMongodbatlasFederatedSettingsIdentityProviderAssociatedOrgsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProvider.DataMongodbatlasFederatedSettingsIdentityProviderAssociatedOrgsOutputReference.property.domainAllowList">domain_allow_list</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProvider.DataMongodbatlasFederatedSettingsIdentityProviderAssociatedOrgsOutputReference.property.domainRestrictionEnabled">domain_restriction_enabled</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProvider.DataMongodbatlasFederatedSettingsIdentityProviderAssociatedOrgsOutputReference.property.identityProviderId">identity_provider_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProvider.DataMongodbatlasFederatedSettingsIdentityProviderAssociatedOrgsOutputReference.property.orgId">org_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProvider.DataMongodbatlasFederatedSettingsIdentityProviderAssociatedOrgsOutputReference.property.postAuthRoleGrants">post_auth_role_grants</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProvider.DataMongodbatlasFederatedSettingsIdentityProviderAssociatedOrgsOutputReference.property.roleMappings">role_mappings</a></code> | <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProvider.DataMongodbatlasFederatedSettingsIdentityProviderAssociatedOrgsRoleMappingsList">DataMongodbatlasFederatedSettingsIdentityProviderAssociatedOrgsRoleMappingsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProvider.DataMongodbatlasFederatedSettingsIdentityProviderAssociatedOrgsOutputReference.property.userConflicts">user_conflicts</a></code> | <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProvider.DataMongodbatlasFederatedSettingsIdentityProviderAssociatedOrgsUserConflictsList">DataMongodbatlasFederatedSettingsIdentityProviderAssociatedOrgsUserConflictsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProvider.DataMongodbatlasFederatedSettingsIdentityProviderAssociatedOrgsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProvider.DataMongodbatlasFederatedSettingsIdentityProviderAssociatedOrgs">DataMongodbatlasFederatedSettingsIdentityProviderAssociatedOrgs</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProvider.DataMongodbatlasFederatedSettingsIdentityProviderAssociatedOrgsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProvider.DataMongodbatlasFederatedSettingsIdentityProviderAssociatedOrgsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `domain_allow_list`<sup>Required</sup> <a name="domain_allow_list" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProvider.DataMongodbatlasFederatedSettingsIdentityProviderAssociatedOrgsOutputReference.property.domainAllowList"></a>

```python
domain_allow_list: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `domain_restriction_enabled`<sup>Required</sup> <a name="domain_restriction_enabled" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProvider.DataMongodbatlasFederatedSettingsIdentityProviderAssociatedOrgsOutputReference.property.domainRestrictionEnabled"></a>

```python
domain_restriction_enabled: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `identity_provider_id`<sup>Required</sup> <a name="identity_provider_id" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProvider.DataMongodbatlasFederatedSettingsIdentityProviderAssociatedOrgsOutputReference.property.identityProviderId"></a>

```python
identity_provider_id: str
```

- *Type:* str

---

##### `org_id`<sup>Required</sup> <a name="org_id" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProvider.DataMongodbatlasFederatedSettingsIdentityProviderAssociatedOrgsOutputReference.property.orgId"></a>

```python
org_id: str
```

- *Type:* str

---

##### `post_auth_role_grants`<sup>Required</sup> <a name="post_auth_role_grants" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProvider.DataMongodbatlasFederatedSettingsIdentityProviderAssociatedOrgsOutputReference.property.postAuthRoleGrants"></a>

```python
post_auth_role_grants: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `role_mappings`<sup>Required</sup> <a name="role_mappings" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProvider.DataMongodbatlasFederatedSettingsIdentityProviderAssociatedOrgsOutputReference.property.roleMappings"></a>

```python
role_mappings: DataMongodbatlasFederatedSettingsIdentityProviderAssociatedOrgsRoleMappingsList
```

- *Type:* <a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProvider.DataMongodbatlasFederatedSettingsIdentityProviderAssociatedOrgsRoleMappingsList">DataMongodbatlasFederatedSettingsIdentityProviderAssociatedOrgsRoleMappingsList</a>

---

##### `user_conflicts`<sup>Required</sup> <a name="user_conflicts" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProvider.DataMongodbatlasFederatedSettingsIdentityProviderAssociatedOrgsOutputReference.property.userConflicts"></a>

```python
user_conflicts: DataMongodbatlasFederatedSettingsIdentityProviderAssociatedOrgsUserConflictsList
```

- *Type:* <a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProvider.DataMongodbatlasFederatedSettingsIdentityProviderAssociatedOrgsUserConflictsList">DataMongodbatlasFederatedSettingsIdentityProviderAssociatedOrgsUserConflictsList</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProvider.DataMongodbatlasFederatedSettingsIdentityProviderAssociatedOrgsOutputReference.property.internalValue"></a>

```python
internal_value: DataMongodbatlasFederatedSettingsIdentityProviderAssociatedOrgs
```

- *Type:* <a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProvider.DataMongodbatlasFederatedSettingsIdentityProviderAssociatedOrgs">DataMongodbatlasFederatedSettingsIdentityProviderAssociatedOrgs</a>

---


### DataMongodbatlasFederatedSettingsIdentityProviderAssociatedOrgsRoleMappingsList <a name="DataMongodbatlasFederatedSettingsIdentityProviderAssociatedOrgsRoleMappingsList" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProvider.DataMongodbatlasFederatedSettingsIdentityProviderAssociatedOrgsRoleMappingsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProvider.DataMongodbatlasFederatedSettingsIdentityProviderAssociatedOrgsRoleMappingsList.Initializer"></a>

```python
from cdktf_cdktf_provider_mongodbatlas import data_mongodbatlas_federated_settings_identity_provider

dataMongodbatlasFederatedSettingsIdentityProvider.DataMongodbatlasFederatedSettingsIdentityProviderAssociatedOrgsRoleMappingsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProvider.DataMongodbatlasFederatedSettingsIdentityProviderAssociatedOrgsRoleMappingsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProvider.DataMongodbatlasFederatedSettingsIdentityProviderAssociatedOrgsRoleMappingsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProvider.DataMongodbatlasFederatedSettingsIdentityProviderAssociatedOrgsRoleMappingsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProvider.DataMongodbatlasFederatedSettingsIdentityProviderAssociatedOrgsRoleMappingsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProvider.DataMongodbatlasFederatedSettingsIdentityProviderAssociatedOrgsRoleMappingsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProvider.DataMongodbatlasFederatedSettingsIdentityProviderAssociatedOrgsRoleMappingsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProvider.DataMongodbatlasFederatedSettingsIdentityProviderAssociatedOrgsRoleMappingsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProvider.DataMongodbatlasFederatedSettingsIdentityProviderAssociatedOrgsRoleMappingsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProvider.DataMongodbatlasFederatedSettingsIdentityProviderAssociatedOrgsRoleMappingsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProvider.DataMongodbatlasFederatedSettingsIdentityProviderAssociatedOrgsRoleMappingsList.get">get</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProvider.DataMongodbatlasFederatedSettingsIdentityProviderAssociatedOrgsRoleMappingsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProvider.DataMongodbatlasFederatedSettingsIdentityProviderAssociatedOrgsRoleMappingsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProvider.DataMongodbatlasFederatedSettingsIdentityProviderAssociatedOrgsRoleMappingsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProvider.DataMongodbatlasFederatedSettingsIdentityProviderAssociatedOrgsRoleMappingsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProvider.DataMongodbatlasFederatedSettingsIdentityProviderAssociatedOrgsRoleMappingsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataMongodbatlasFederatedSettingsIdentityProviderAssociatedOrgsRoleMappingsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProvider.DataMongodbatlasFederatedSettingsIdentityProviderAssociatedOrgsRoleMappingsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProvider.DataMongodbatlasFederatedSettingsIdentityProviderAssociatedOrgsRoleMappingsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProvider.DataMongodbatlasFederatedSettingsIdentityProviderAssociatedOrgsRoleMappingsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProvider.DataMongodbatlasFederatedSettingsIdentityProviderAssociatedOrgsRoleMappingsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProvider.DataMongodbatlasFederatedSettingsIdentityProviderAssociatedOrgsRoleMappingsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataMongodbatlasFederatedSettingsIdentityProviderAssociatedOrgsRoleMappingsOutputReference <a name="DataMongodbatlasFederatedSettingsIdentityProviderAssociatedOrgsRoleMappingsOutputReference" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProvider.DataMongodbatlasFederatedSettingsIdentityProviderAssociatedOrgsRoleMappingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProvider.DataMongodbatlasFederatedSettingsIdentityProviderAssociatedOrgsRoleMappingsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_mongodbatlas import data_mongodbatlas_federated_settings_identity_provider

dataMongodbatlasFederatedSettingsIdentityProvider.DataMongodbatlasFederatedSettingsIdentityProviderAssociatedOrgsRoleMappingsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProvider.DataMongodbatlasFederatedSettingsIdentityProviderAssociatedOrgsRoleMappingsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProvider.DataMongodbatlasFederatedSettingsIdentityProviderAssociatedOrgsRoleMappingsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProvider.DataMongodbatlasFederatedSettingsIdentityProviderAssociatedOrgsRoleMappingsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProvider.DataMongodbatlasFederatedSettingsIdentityProviderAssociatedOrgsRoleMappingsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProvider.DataMongodbatlasFederatedSettingsIdentityProviderAssociatedOrgsRoleMappingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProvider.DataMongodbatlasFederatedSettingsIdentityProviderAssociatedOrgsRoleMappingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProvider.DataMongodbatlasFederatedSettingsIdentityProviderAssociatedOrgsRoleMappingsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProvider.DataMongodbatlasFederatedSettingsIdentityProviderAssociatedOrgsRoleMappingsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProvider.DataMongodbatlasFederatedSettingsIdentityProviderAssociatedOrgsRoleMappingsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProvider.DataMongodbatlasFederatedSettingsIdentityProviderAssociatedOrgsRoleMappingsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProvider.DataMongodbatlasFederatedSettingsIdentityProviderAssociatedOrgsRoleMappingsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProvider.DataMongodbatlasFederatedSettingsIdentityProviderAssociatedOrgsRoleMappingsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProvider.DataMongodbatlasFederatedSettingsIdentityProviderAssociatedOrgsRoleMappingsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProvider.DataMongodbatlasFederatedSettingsIdentityProviderAssociatedOrgsRoleMappingsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProvider.DataMongodbatlasFederatedSettingsIdentityProviderAssociatedOrgsRoleMappingsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProvider.DataMongodbatlasFederatedSettingsIdentityProviderAssociatedOrgsRoleMappingsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProvider.DataMongodbatlasFederatedSettingsIdentityProviderAssociatedOrgsRoleMappingsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProvider.DataMongodbatlasFederatedSettingsIdentityProviderAssociatedOrgsRoleMappingsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProvider.DataMongodbatlasFederatedSettingsIdentityProviderAssociatedOrgsRoleMappingsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProvider.DataMongodbatlasFederatedSettingsIdentityProviderAssociatedOrgsRoleMappingsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProvider.DataMongodbatlasFederatedSettingsIdentityProviderAssociatedOrgsRoleMappingsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProvider.DataMongodbatlasFederatedSettingsIdentityProviderAssociatedOrgsRoleMappingsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProvider.DataMongodbatlasFederatedSettingsIdentityProviderAssociatedOrgsRoleMappingsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProvider.DataMongodbatlasFederatedSettingsIdentityProviderAssociatedOrgsRoleMappingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProvider.DataMongodbatlasFederatedSettingsIdentityProviderAssociatedOrgsRoleMappingsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProvider.DataMongodbatlasFederatedSettingsIdentityProviderAssociatedOrgsRoleMappingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProvider.DataMongodbatlasFederatedSettingsIdentityProviderAssociatedOrgsRoleMappingsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProvider.DataMongodbatlasFederatedSettingsIdentityProviderAssociatedOrgsRoleMappingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProvider.DataMongodbatlasFederatedSettingsIdentityProviderAssociatedOrgsRoleMappingsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProvider.DataMongodbatlasFederatedSettingsIdentityProviderAssociatedOrgsRoleMappingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProvider.DataMongodbatlasFederatedSettingsIdentityProviderAssociatedOrgsRoleMappingsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProvider.DataMongodbatlasFederatedSettingsIdentityProviderAssociatedOrgsRoleMappingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProvider.DataMongodbatlasFederatedSettingsIdentityProviderAssociatedOrgsRoleMappingsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProvider.DataMongodbatlasFederatedSettingsIdentityProviderAssociatedOrgsRoleMappingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProvider.DataMongodbatlasFederatedSettingsIdentityProviderAssociatedOrgsRoleMappingsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProvider.DataMongodbatlasFederatedSettingsIdentityProviderAssociatedOrgsRoleMappingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProvider.DataMongodbatlasFederatedSettingsIdentityProviderAssociatedOrgsRoleMappingsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProvider.DataMongodbatlasFederatedSettingsIdentityProviderAssociatedOrgsRoleMappingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProvider.DataMongodbatlasFederatedSettingsIdentityProviderAssociatedOrgsRoleMappingsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProvider.DataMongodbatlasFederatedSettingsIdentityProviderAssociatedOrgsRoleMappingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProvider.DataMongodbatlasFederatedSettingsIdentityProviderAssociatedOrgsRoleMappingsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProvider.DataMongodbatlasFederatedSettingsIdentityProviderAssociatedOrgsRoleMappingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProvider.DataMongodbatlasFederatedSettingsIdentityProviderAssociatedOrgsRoleMappingsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProvider.DataMongodbatlasFederatedSettingsIdentityProviderAssociatedOrgsRoleMappingsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProvider.DataMongodbatlasFederatedSettingsIdentityProviderAssociatedOrgsRoleMappingsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProvider.DataMongodbatlasFederatedSettingsIdentityProviderAssociatedOrgsRoleMappingsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProvider.DataMongodbatlasFederatedSettingsIdentityProviderAssociatedOrgsRoleMappingsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProvider.DataMongodbatlasFederatedSettingsIdentityProviderAssociatedOrgsRoleMappingsOutputReference.property.externalGroupName">external_group_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProvider.DataMongodbatlasFederatedSettingsIdentityProviderAssociatedOrgsRoleMappingsOutputReference.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProvider.DataMongodbatlasFederatedSettingsIdentityProviderAssociatedOrgsRoleMappingsOutputReference.property.roleAssignments">role_assignments</a></code> | <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProvider.DataMongodbatlasFederatedSettingsIdentityProviderAssociatedOrgsRoleMappingsRoleAssignmentsList">DataMongodbatlasFederatedSettingsIdentityProviderAssociatedOrgsRoleMappingsRoleAssignmentsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProvider.DataMongodbatlasFederatedSettingsIdentityProviderAssociatedOrgsRoleMappingsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProvider.DataMongodbatlasFederatedSettingsIdentityProviderAssociatedOrgsRoleMappings">DataMongodbatlasFederatedSettingsIdentityProviderAssociatedOrgsRoleMappings</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProvider.DataMongodbatlasFederatedSettingsIdentityProviderAssociatedOrgsRoleMappingsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProvider.DataMongodbatlasFederatedSettingsIdentityProviderAssociatedOrgsRoleMappingsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `external_group_name`<sup>Required</sup> <a name="external_group_name" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProvider.DataMongodbatlasFederatedSettingsIdentityProviderAssociatedOrgsRoleMappingsOutputReference.property.externalGroupName"></a>

```python
external_group_name: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProvider.DataMongodbatlasFederatedSettingsIdentityProviderAssociatedOrgsRoleMappingsOutputReference.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `role_assignments`<sup>Required</sup> <a name="role_assignments" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProvider.DataMongodbatlasFederatedSettingsIdentityProviderAssociatedOrgsRoleMappingsOutputReference.property.roleAssignments"></a>

```python
role_assignments: DataMongodbatlasFederatedSettingsIdentityProviderAssociatedOrgsRoleMappingsRoleAssignmentsList
```

- *Type:* <a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProvider.DataMongodbatlasFederatedSettingsIdentityProviderAssociatedOrgsRoleMappingsRoleAssignmentsList">DataMongodbatlasFederatedSettingsIdentityProviderAssociatedOrgsRoleMappingsRoleAssignmentsList</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProvider.DataMongodbatlasFederatedSettingsIdentityProviderAssociatedOrgsRoleMappingsOutputReference.property.internalValue"></a>

```python
internal_value: DataMongodbatlasFederatedSettingsIdentityProviderAssociatedOrgsRoleMappings
```

- *Type:* <a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProvider.DataMongodbatlasFederatedSettingsIdentityProviderAssociatedOrgsRoleMappings">DataMongodbatlasFederatedSettingsIdentityProviderAssociatedOrgsRoleMappings</a>

---


### DataMongodbatlasFederatedSettingsIdentityProviderAssociatedOrgsRoleMappingsRoleAssignmentsList <a name="DataMongodbatlasFederatedSettingsIdentityProviderAssociatedOrgsRoleMappingsRoleAssignmentsList" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProvider.DataMongodbatlasFederatedSettingsIdentityProviderAssociatedOrgsRoleMappingsRoleAssignmentsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProvider.DataMongodbatlasFederatedSettingsIdentityProviderAssociatedOrgsRoleMappingsRoleAssignmentsList.Initializer"></a>

```python
from cdktf_cdktf_provider_mongodbatlas import data_mongodbatlas_federated_settings_identity_provider

dataMongodbatlasFederatedSettingsIdentityProvider.DataMongodbatlasFederatedSettingsIdentityProviderAssociatedOrgsRoleMappingsRoleAssignmentsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProvider.DataMongodbatlasFederatedSettingsIdentityProviderAssociatedOrgsRoleMappingsRoleAssignmentsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProvider.DataMongodbatlasFederatedSettingsIdentityProviderAssociatedOrgsRoleMappingsRoleAssignmentsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProvider.DataMongodbatlasFederatedSettingsIdentityProviderAssociatedOrgsRoleMappingsRoleAssignmentsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProvider.DataMongodbatlasFederatedSettingsIdentityProviderAssociatedOrgsRoleMappingsRoleAssignmentsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProvider.DataMongodbatlasFederatedSettingsIdentityProviderAssociatedOrgsRoleMappingsRoleAssignmentsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProvider.DataMongodbatlasFederatedSettingsIdentityProviderAssociatedOrgsRoleMappingsRoleAssignmentsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProvider.DataMongodbatlasFederatedSettingsIdentityProviderAssociatedOrgsRoleMappingsRoleAssignmentsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProvider.DataMongodbatlasFederatedSettingsIdentityProviderAssociatedOrgsRoleMappingsRoleAssignmentsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProvider.DataMongodbatlasFederatedSettingsIdentityProviderAssociatedOrgsRoleMappingsRoleAssignmentsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProvider.DataMongodbatlasFederatedSettingsIdentityProviderAssociatedOrgsRoleMappingsRoleAssignmentsList.get">get</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProvider.DataMongodbatlasFederatedSettingsIdentityProviderAssociatedOrgsRoleMappingsRoleAssignmentsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProvider.DataMongodbatlasFederatedSettingsIdentityProviderAssociatedOrgsRoleMappingsRoleAssignmentsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProvider.DataMongodbatlasFederatedSettingsIdentityProviderAssociatedOrgsRoleMappingsRoleAssignmentsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProvider.DataMongodbatlasFederatedSettingsIdentityProviderAssociatedOrgsRoleMappingsRoleAssignmentsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProvider.DataMongodbatlasFederatedSettingsIdentityProviderAssociatedOrgsRoleMappingsRoleAssignmentsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataMongodbatlasFederatedSettingsIdentityProviderAssociatedOrgsRoleMappingsRoleAssignmentsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProvider.DataMongodbatlasFederatedSettingsIdentityProviderAssociatedOrgsRoleMappingsRoleAssignmentsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProvider.DataMongodbatlasFederatedSettingsIdentityProviderAssociatedOrgsRoleMappingsRoleAssignmentsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProvider.DataMongodbatlasFederatedSettingsIdentityProviderAssociatedOrgsRoleMappingsRoleAssignmentsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProvider.DataMongodbatlasFederatedSettingsIdentityProviderAssociatedOrgsRoleMappingsRoleAssignmentsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProvider.DataMongodbatlasFederatedSettingsIdentityProviderAssociatedOrgsRoleMappingsRoleAssignmentsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataMongodbatlasFederatedSettingsIdentityProviderAssociatedOrgsRoleMappingsRoleAssignmentsOutputReference <a name="DataMongodbatlasFederatedSettingsIdentityProviderAssociatedOrgsRoleMappingsRoleAssignmentsOutputReference" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProvider.DataMongodbatlasFederatedSettingsIdentityProviderAssociatedOrgsRoleMappingsRoleAssignmentsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProvider.DataMongodbatlasFederatedSettingsIdentityProviderAssociatedOrgsRoleMappingsRoleAssignmentsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_mongodbatlas import data_mongodbatlas_federated_settings_identity_provider

dataMongodbatlasFederatedSettingsIdentityProvider.DataMongodbatlasFederatedSettingsIdentityProviderAssociatedOrgsRoleMappingsRoleAssignmentsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProvider.DataMongodbatlasFederatedSettingsIdentityProviderAssociatedOrgsRoleMappingsRoleAssignmentsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProvider.DataMongodbatlasFederatedSettingsIdentityProviderAssociatedOrgsRoleMappingsRoleAssignmentsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProvider.DataMongodbatlasFederatedSettingsIdentityProviderAssociatedOrgsRoleMappingsRoleAssignmentsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProvider.DataMongodbatlasFederatedSettingsIdentityProviderAssociatedOrgsRoleMappingsRoleAssignmentsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProvider.DataMongodbatlasFederatedSettingsIdentityProviderAssociatedOrgsRoleMappingsRoleAssignmentsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProvider.DataMongodbatlasFederatedSettingsIdentityProviderAssociatedOrgsRoleMappingsRoleAssignmentsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProvider.DataMongodbatlasFederatedSettingsIdentityProviderAssociatedOrgsRoleMappingsRoleAssignmentsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProvider.DataMongodbatlasFederatedSettingsIdentityProviderAssociatedOrgsRoleMappingsRoleAssignmentsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProvider.DataMongodbatlasFederatedSettingsIdentityProviderAssociatedOrgsRoleMappingsRoleAssignmentsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProvider.DataMongodbatlasFederatedSettingsIdentityProviderAssociatedOrgsRoleMappingsRoleAssignmentsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProvider.DataMongodbatlasFederatedSettingsIdentityProviderAssociatedOrgsRoleMappingsRoleAssignmentsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProvider.DataMongodbatlasFederatedSettingsIdentityProviderAssociatedOrgsRoleMappingsRoleAssignmentsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProvider.DataMongodbatlasFederatedSettingsIdentityProviderAssociatedOrgsRoleMappingsRoleAssignmentsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProvider.DataMongodbatlasFederatedSettingsIdentityProviderAssociatedOrgsRoleMappingsRoleAssignmentsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProvider.DataMongodbatlasFederatedSettingsIdentityProviderAssociatedOrgsRoleMappingsRoleAssignmentsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProvider.DataMongodbatlasFederatedSettingsIdentityProviderAssociatedOrgsRoleMappingsRoleAssignmentsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProvider.DataMongodbatlasFederatedSettingsIdentityProviderAssociatedOrgsRoleMappingsRoleAssignmentsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProvider.DataMongodbatlasFederatedSettingsIdentityProviderAssociatedOrgsRoleMappingsRoleAssignmentsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProvider.DataMongodbatlasFederatedSettingsIdentityProviderAssociatedOrgsRoleMappingsRoleAssignmentsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProvider.DataMongodbatlasFederatedSettingsIdentityProviderAssociatedOrgsRoleMappingsRoleAssignmentsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProvider.DataMongodbatlasFederatedSettingsIdentityProviderAssociatedOrgsRoleMappingsRoleAssignmentsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProvider.DataMongodbatlasFederatedSettingsIdentityProviderAssociatedOrgsRoleMappingsRoleAssignmentsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProvider.DataMongodbatlasFederatedSettingsIdentityProviderAssociatedOrgsRoleMappingsRoleAssignmentsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProvider.DataMongodbatlasFederatedSettingsIdentityProviderAssociatedOrgsRoleMappingsRoleAssignmentsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProvider.DataMongodbatlasFederatedSettingsIdentityProviderAssociatedOrgsRoleMappingsRoleAssignmentsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProvider.DataMongodbatlasFederatedSettingsIdentityProviderAssociatedOrgsRoleMappingsRoleAssignmentsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProvider.DataMongodbatlasFederatedSettingsIdentityProviderAssociatedOrgsRoleMappingsRoleAssignmentsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProvider.DataMongodbatlasFederatedSettingsIdentityProviderAssociatedOrgsRoleMappingsRoleAssignmentsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProvider.DataMongodbatlasFederatedSettingsIdentityProviderAssociatedOrgsRoleMappingsRoleAssignmentsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProvider.DataMongodbatlasFederatedSettingsIdentityProviderAssociatedOrgsRoleMappingsRoleAssignmentsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProvider.DataMongodbatlasFederatedSettingsIdentityProviderAssociatedOrgsRoleMappingsRoleAssignmentsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProvider.DataMongodbatlasFederatedSettingsIdentityProviderAssociatedOrgsRoleMappingsRoleAssignmentsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProvider.DataMongodbatlasFederatedSettingsIdentityProviderAssociatedOrgsRoleMappingsRoleAssignmentsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProvider.DataMongodbatlasFederatedSettingsIdentityProviderAssociatedOrgsRoleMappingsRoleAssignmentsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProvider.DataMongodbatlasFederatedSettingsIdentityProviderAssociatedOrgsRoleMappingsRoleAssignmentsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProvider.DataMongodbatlasFederatedSettingsIdentityProviderAssociatedOrgsRoleMappingsRoleAssignmentsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProvider.DataMongodbatlasFederatedSettingsIdentityProviderAssociatedOrgsRoleMappingsRoleAssignmentsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProvider.DataMongodbatlasFederatedSettingsIdentityProviderAssociatedOrgsRoleMappingsRoleAssignmentsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProvider.DataMongodbatlasFederatedSettingsIdentityProviderAssociatedOrgsRoleMappingsRoleAssignmentsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProvider.DataMongodbatlasFederatedSettingsIdentityProviderAssociatedOrgsRoleMappingsRoleAssignmentsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProvider.DataMongodbatlasFederatedSettingsIdentityProviderAssociatedOrgsRoleMappingsRoleAssignmentsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProvider.DataMongodbatlasFederatedSettingsIdentityProviderAssociatedOrgsRoleMappingsRoleAssignmentsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProvider.DataMongodbatlasFederatedSettingsIdentityProviderAssociatedOrgsRoleMappingsRoleAssignmentsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProvider.DataMongodbatlasFederatedSettingsIdentityProviderAssociatedOrgsRoleMappingsRoleAssignmentsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProvider.DataMongodbatlasFederatedSettingsIdentityProviderAssociatedOrgsRoleMappingsRoleAssignmentsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProvider.DataMongodbatlasFederatedSettingsIdentityProviderAssociatedOrgsRoleMappingsRoleAssignmentsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProvider.DataMongodbatlasFederatedSettingsIdentityProviderAssociatedOrgsRoleMappingsRoleAssignmentsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProvider.DataMongodbatlasFederatedSettingsIdentityProviderAssociatedOrgsRoleMappingsRoleAssignmentsOutputReference.property.groupId">group_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProvider.DataMongodbatlasFederatedSettingsIdentityProviderAssociatedOrgsRoleMappingsRoleAssignmentsOutputReference.property.orgId">org_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProvider.DataMongodbatlasFederatedSettingsIdentityProviderAssociatedOrgsRoleMappingsRoleAssignmentsOutputReference.property.role">role</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProvider.DataMongodbatlasFederatedSettingsIdentityProviderAssociatedOrgsRoleMappingsRoleAssignmentsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProvider.DataMongodbatlasFederatedSettingsIdentityProviderAssociatedOrgsRoleMappingsRoleAssignments">DataMongodbatlasFederatedSettingsIdentityProviderAssociatedOrgsRoleMappingsRoleAssignments</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProvider.DataMongodbatlasFederatedSettingsIdentityProviderAssociatedOrgsRoleMappingsRoleAssignmentsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProvider.DataMongodbatlasFederatedSettingsIdentityProviderAssociatedOrgsRoleMappingsRoleAssignmentsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `group_id`<sup>Required</sup> <a name="group_id" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProvider.DataMongodbatlasFederatedSettingsIdentityProviderAssociatedOrgsRoleMappingsRoleAssignmentsOutputReference.property.groupId"></a>

```python
group_id: str
```

- *Type:* str

---

##### `org_id`<sup>Required</sup> <a name="org_id" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProvider.DataMongodbatlasFederatedSettingsIdentityProviderAssociatedOrgsRoleMappingsRoleAssignmentsOutputReference.property.orgId"></a>

```python
org_id: str
```

- *Type:* str

---

##### `role`<sup>Required</sup> <a name="role" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProvider.DataMongodbatlasFederatedSettingsIdentityProviderAssociatedOrgsRoleMappingsRoleAssignmentsOutputReference.property.role"></a>

```python
role: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProvider.DataMongodbatlasFederatedSettingsIdentityProviderAssociatedOrgsRoleMappingsRoleAssignmentsOutputReference.property.internalValue"></a>

```python
internal_value: DataMongodbatlasFederatedSettingsIdentityProviderAssociatedOrgsRoleMappingsRoleAssignments
```

- *Type:* <a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProvider.DataMongodbatlasFederatedSettingsIdentityProviderAssociatedOrgsRoleMappingsRoleAssignments">DataMongodbatlasFederatedSettingsIdentityProviderAssociatedOrgsRoleMappingsRoleAssignments</a>

---


### DataMongodbatlasFederatedSettingsIdentityProviderAssociatedOrgsUserConflictsList <a name="DataMongodbatlasFederatedSettingsIdentityProviderAssociatedOrgsUserConflictsList" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProvider.DataMongodbatlasFederatedSettingsIdentityProviderAssociatedOrgsUserConflictsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProvider.DataMongodbatlasFederatedSettingsIdentityProviderAssociatedOrgsUserConflictsList.Initializer"></a>

```python
from cdktf_cdktf_provider_mongodbatlas import data_mongodbatlas_federated_settings_identity_provider

dataMongodbatlasFederatedSettingsIdentityProvider.DataMongodbatlasFederatedSettingsIdentityProviderAssociatedOrgsUserConflictsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProvider.DataMongodbatlasFederatedSettingsIdentityProviderAssociatedOrgsUserConflictsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProvider.DataMongodbatlasFederatedSettingsIdentityProviderAssociatedOrgsUserConflictsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProvider.DataMongodbatlasFederatedSettingsIdentityProviderAssociatedOrgsUserConflictsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProvider.DataMongodbatlasFederatedSettingsIdentityProviderAssociatedOrgsUserConflictsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProvider.DataMongodbatlasFederatedSettingsIdentityProviderAssociatedOrgsUserConflictsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProvider.DataMongodbatlasFederatedSettingsIdentityProviderAssociatedOrgsUserConflictsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProvider.DataMongodbatlasFederatedSettingsIdentityProviderAssociatedOrgsUserConflictsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProvider.DataMongodbatlasFederatedSettingsIdentityProviderAssociatedOrgsUserConflictsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProvider.DataMongodbatlasFederatedSettingsIdentityProviderAssociatedOrgsUserConflictsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProvider.DataMongodbatlasFederatedSettingsIdentityProviderAssociatedOrgsUserConflictsList.get">get</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProvider.DataMongodbatlasFederatedSettingsIdentityProviderAssociatedOrgsUserConflictsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProvider.DataMongodbatlasFederatedSettingsIdentityProviderAssociatedOrgsUserConflictsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProvider.DataMongodbatlasFederatedSettingsIdentityProviderAssociatedOrgsUserConflictsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProvider.DataMongodbatlasFederatedSettingsIdentityProviderAssociatedOrgsUserConflictsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProvider.DataMongodbatlasFederatedSettingsIdentityProviderAssociatedOrgsUserConflictsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataMongodbatlasFederatedSettingsIdentityProviderAssociatedOrgsUserConflictsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProvider.DataMongodbatlasFederatedSettingsIdentityProviderAssociatedOrgsUserConflictsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProvider.DataMongodbatlasFederatedSettingsIdentityProviderAssociatedOrgsUserConflictsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProvider.DataMongodbatlasFederatedSettingsIdentityProviderAssociatedOrgsUserConflictsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProvider.DataMongodbatlasFederatedSettingsIdentityProviderAssociatedOrgsUserConflictsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProvider.DataMongodbatlasFederatedSettingsIdentityProviderAssociatedOrgsUserConflictsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataMongodbatlasFederatedSettingsIdentityProviderAssociatedOrgsUserConflictsOutputReference <a name="DataMongodbatlasFederatedSettingsIdentityProviderAssociatedOrgsUserConflictsOutputReference" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProvider.DataMongodbatlasFederatedSettingsIdentityProviderAssociatedOrgsUserConflictsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProvider.DataMongodbatlasFederatedSettingsIdentityProviderAssociatedOrgsUserConflictsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_mongodbatlas import data_mongodbatlas_federated_settings_identity_provider

dataMongodbatlasFederatedSettingsIdentityProvider.DataMongodbatlasFederatedSettingsIdentityProviderAssociatedOrgsUserConflictsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProvider.DataMongodbatlasFederatedSettingsIdentityProviderAssociatedOrgsUserConflictsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProvider.DataMongodbatlasFederatedSettingsIdentityProviderAssociatedOrgsUserConflictsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProvider.DataMongodbatlasFederatedSettingsIdentityProviderAssociatedOrgsUserConflictsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProvider.DataMongodbatlasFederatedSettingsIdentityProviderAssociatedOrgsUserConflictsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProvider.DataMongodbatlasFederatedSettingsIdentityProviderAssociatedOrgsUserConflictsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProvider.DataMongodbatlasFederatedSettingsIdentityProviderAssociatedOrgsUserConflictsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProvider.DataMongodbatlasFederatedSettingsIdentityProviderAssociatedOrgsUserConflictsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProvider.DataMongodbatlasFederatedSettingsIdentityProviderAssociatedOrgsUserConflictsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProvider.DataMongodbatlasFederatedSettingsIdentityProviderAssociatedOrgsUserConflictsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProvider.DataMongodbatlasFederatedSettingsIdentityProviderAssociatedOrgsUserConflictsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProvider.DataMongodbatlasFederatedSettingsIdentityProviderAssociatedOrgsUserConflictsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProvider.DataMongodbatlasFederatedSettingsIdentityProviderAssociatedOrgsUserConflictsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProvider.DataMongodbatlasFederatedSettingsIdentityProviderAssociatedOrgsUserConflictsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProvider.DataMongodbatlasFederatedSettingsIdentityProviderAssociatedOrgsUserConflictsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProvider.DataMongodbatlasFederatedSettingsIdentityProviderAssociatedOrgsUserConflictsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProvider.DataMongodbatlasFederatedSettingsIdentityProviderAssociatedOrgsUserConflictsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProvider.DataMongodbatlasFederatedSettingsIdentityProviderAssociatedOrgsUserConflictsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProvider.DataMongodbatlasFederatedSettingsIdentityProviderAssociatedOrgsUserConflictsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProvider.DataMongodbatlasFederatedSettingsIdentityProviderAssociatedOrgsUserConflictsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProvider.DataMongodbatlasFederatedSettingsIdentityProviderAssociatedOrgsUserConflictsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProvider.DataMongodbatlasFederatedSettingsIdentityProviderAssociatedOrgsUserConflictsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProvider.DataMongodbatlasFederatedSettingsIdentityProviderAssociatedOrgsUserConflictsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProvider.DataMongodbatlasFederatedSettingsIdentityProviderAssociatedOrgsUserConflictsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProvider.DataMongodbatlasFederatedSettingsIdentityProviderAssociatedOrgsUserConflictsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProvider.DataMongodbatlasFederatedSettingsIdentityProviderAssociatedOrgsUserConflictsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProvider.DataMongodbatlasFederatedSettingsIdentityProviderAssociatedOrgsUserConflictsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProvider.DataMongodbatlasFederatedSettingsIdentityProviderAssociatedOrgsUserConflictsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProvider.DataMongodbatlasFederatedSettingsIdentityProviderAssociatedOrgsUserConflictsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProvider.DataMongodbatlasFederatedSettingsIdentityProviderAssociatedOrgsUserConflictsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProvider.DataMongodbatlasFederatedSettingsIdentityProviderAssociatedOrgsUserConflictsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProvider.DataMongodbatlasFederatedSettingsIdentityProviderAssociatedOrgsUserConflictsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProvider.DataMongodbatlasFederatedSettingsIdentityProviderAssociatedOrgsUserConflictsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProvider.DataMongodbatlasFederatedSettingsIdentityProviderAssociatedOrgsUserConflictsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProvider.DataMongodbatlasFederatedSettingsIdentityProviderAssociatedOrgsUserConflictsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProvider.DataMongodbatlasFederatedSettingsIdentityProviderAssociatedOrgsUserConflictsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProvider.DataMongodbatlasFederatedSettingsIdentityProviderAssociatedOrgsUserConflictsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProvider.DataMongodbatlasFederatedSettingsIdentityProviderAssociatedOrgsUserConflictsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProvider.DataMongodbatlasFederatedSettingsIdentityProviderAssociatedOrgsUserConflictsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProvider.DataMongodbatlasFederatedSettingsIdentityProviderAssociatedOrgsUserConflictsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProvider.DataMongodbatlasFederatedSettingsIdentityProviderAssociatedOrgsUserConflictsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProvider.DataMongodbatlasFederatedSettingsIdentityProviderAssociatedOrgsUserConflictsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProvider.DataMongodbatlasFederatedSettingsIdentityProviderAssociatedOrgsUserConflictsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProvider.DataMongodbatlasFederatedSettingsIdentityProviderAssociatedOrgsUserConflictsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProvider.DataMongodbatlasFederatedSettingsIdentityProviderAssociatedOrgsUserConflictsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProvider.DataMongodbatlasFederatedSettingsIdentityProviderAssociatedOrgsUserConflictsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProvider.DataMongodbatlasFederatedSettingsIdentityProviderAssociatedOrgsUserConflictsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProvider.DataMongodbatlasFederatedSettingsIdentityProviderAssociatedOrgsUserConflictsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProvider.DataMongodbatlasFederatedSettingsIdentityProviderAssociatedOrgsUserConflictsOutputReference.property.emailAddress">email_address</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProvider.DataMongodbatlasFederatedSettingsIdentityProviderAssociatedOrgsUserConflictsOutputReference.property.federationSettingsId">federation_settings_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProvider.DataMongodbatlasFederatedSettingsIdentityProviderAssociatedOrgsUserConflictsOutputReference.property.firstName">first_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProvider.DataMongodbatlasFederatedSettingsIdentityProviderAssociatedOrgsUserConflictsOutputReference.property.lastName">last_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProvider.DataMongodbatlasFederatedSettingsIdentityProviderAssociatedOrgsUserConflictsOutputReference.property.userId">user_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProvider.DataMongodbatlasFederatedSettingsIdentityProviderAssociatedOrgsUserConflictsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProvider.DataMongodbatlasFederatedSettingsIdentityProviderAssociatedOrgsUserConflicts">DataMongodbatlasFederatedSettingsIdentityProviderAssociatedOrgsUserConflicts</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProvider.DataMongodbatlasFederatedSettingsIdentityProviderAssociatedOrgsUserConflictsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProvider.DataMongodbatlasFederatedSettingsIdentityProviderAssociatedOrgsUserConflictsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `email_address`<sup>Required</sup> <a name="email_address" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProvider.DataMongodbatlasFederatedSettingsIdentityProviderAssociatedOrgsUserConflictsOutputReference.property.emailAddress"></a>

```python
email_address: str
```

- *Type:* str

---

##### `federation_settings_id`<sup>Required</sup> <a name="federation_settings_id" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProvider.DataMongodbatlasFederatedSettingsIdentityProviderAssociatedOrgsUserConflictsOutputReference.property.federationSettingsId"></a>

```python
federation_settings_id: str
```

- *Type:* str

---

##### `first_name`<sup>Required</sup> <a name="first_name" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProvider.DataMongodbatlasFederatedSettingsIdentityProviderAssociatedOrgsUserConflictsOutputReference.property.firstName"></a>

```python
first_name: str
```

- *Type:* str

---

##### `last_name`<sup>Required</sup> <a name="last_name" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProvider.DataMongodbatlasFederatedSettingsIdentityProviderAssociatedOrgsUserConflictsOutputReference.property.lastName"></a>

```python
last_name: str
```

- *Type:* str

---

##### `user_id`<sup>Required</sup> <a name="user_id" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProvider.DataMongodbatlasFederatedSettingsIdentityProviderAssociatedOrgsUserConflictsOutputReference.property.userId"></a>

```python
user_id: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProvider.DataMongodbatlasFederatedSettingsIdentityProviderAssociatedOrgsUserConflictsOutputReference.property.internalValue"></a>

```python
internal_value: DataMongodbatlasFederatedSettingsIdentityProviderAssociatedOrgsUserConflicts
```

- *Type:* <a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProvider.DataMongodbatlasFederatedSettingsIdentityProviderAssociatedOrgsUserConflicts">DataMongodbatlasFederatedSettingsIdentityProviderAssociatedOrgsUserConflicts</a>

---


### DataMongodbatlasFederatedSettingsIdentityProviderPemFileInfoCertificatesList <a name="DataMongodbatlasFederatedSettingsIdentityProviderPemFileInfoCertificatesList" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProvider.DataMongodbatlasFederatedSettingsIdentityProviderPemFileInfoCertificatesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProvider.DataMongodbatlasFederatedSettingsIdentityProviderPemFileInfoCertificatesList.Initializer"></a>

```python
from cdktf_cdktf_provider_mongodbatlas import data_mongodbatlas_federated_settings_identity_provider

dataMongodbatlasFederatedSettingsIdentityProvider.DataMongodbatlasFederatedSettingsIdentityProviderPemFileInfoCertificatesList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProvider.DataMongodbatlasFederatedSettingsIdentityProviderPemFileInfoCertificatesList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProvider.DataMongodbatlasFederatedSettingsIdentityProviderPemFileInfoCertificatesList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProvider.DataMongodbatlasFederatedSettingsIdentityProviderPemFileInfoCertificatesList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProvider.DataMongodbatlasFederatedSettingsIdentityProviderPemFileInfoCertificatesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProvider.DataMongodbatlasFederatedSettingsIdentityProviderPemFileInfoCertificatesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProvider.DataMongodbatlasFederatedSettingsIdentityProviderPemFileInfoCertificatesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProvider.DataMongodbatlasFederatedSettingsIdentityProviderPemFileInfoCertificatesList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProvider.DataMongodbatlasFederatedSettingsIdentityProviderPemFileInfoCertificatesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProvider.DataMongodbatlasFederatedSettingsIdentityProviderPemFileInfoCertificatesList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProvider.DataMongodbatlasFederatedSettingsIdentityProviderPemFileInfoCertificatesList.get">get</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProvider.DataMongodbatlasFederatedSettingsIdentityProviderPemFileInfoCertificatesList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProvider.DataMongodbatlasFederatedSettingsIdentityProviderPemFileInfoCertificatesList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProvider.DataMongodbatlasFederatedSettingsIdentityProviderPemFileInfoCertificatesList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProvider.DataMongodbatlasFederatedSettingsIdentityProviderPemFileInfoCertificatesList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProvider.DataMongodbatlasFederatedSettingsIdentityProviderPemFileInfoCertificatesList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataMongodbatlasFederatedSettingsIdentityProviderPemFileInfoCertificatesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProvider.DataMongodbatlasFederatedSettingsIdentityProviderPemFileInfoCertificatesList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProvider.DataMongodbatlasFederatedSettingsIdentityProviderPemFileInfoCertificatesList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProvider.DataMongodbatlasFederatedSettingsIdentityProviderPemFileInfoCertificatesList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProvider.DataMongodbatlasFederatedSettingsIdentityProviderPemFileInfoCertificatesList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProvider.DataMongodbatlasFederatedSettingsIdentityProviderPemFileInfoCertificatesList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataMongodbatlasFederatedSettingsIdentityProviderPemFileInfoCertificatesOutputReference <a name="DataMongodbatlasFederatedSettingsIdentityProviderPemFileInfoCertificatesOutputReference" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProvider.DataMongodbatlasFederatedSettingsIdentityProviderPemFileInfoCertificatesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProvider.DataMongodbatlasFederatedSettingsIdentityProviderPemFileInfoCertificatesOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_mongodbatlas import data_mongodbatlas_federated_settings_identity_provider

dataMongodbatlasFederatedSettingsIdentityProvider.DataMongodbatlasFederatedSettingsIdentityProviderPemFileInfoCertificatesOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProvider.DataMongodbatlasFederatedSettingsIdentityProviderPemFileInfoCertificatesOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProvider.DataMongodbatlasFederatedSettingsIdentityProviderPemFileInfoCertificatesOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProvider.DataMongodbatlasFederatedSettingsIdentityProviderPemFileInfoCertificatesOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProvider.DataMongodbatlasFederatedSettingsIdentityProviderPemFileInfoCertificatesOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProvider.DataMongodbatlasFederatedSettingsIdentityProviderPemFileInfoCertificatesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProvider.DataMongodbatlasFederatedSettingsIdentityProviderPemFileInfoCertificatesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProvider.DataMongodbatlasFederatedSettingsIdentityProviderPemFileInfoCertificatesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProvider.DataMongodbatlasFederatedSettingsIdentityProviderPemFileInfoCertificatesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProvider.DataMongodbatlasFederatedSettingsIdentityProviderPemFileInfoCertificatesOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProvider.DataMongodbatlasFederatedSettingsIdentityProviderPemFileInfoCertificatesOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProvider.DataMongodbatlasFederatedSettingsIdentityProviderPemFileInfoCertificatesOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProvider.DataMongodbatlasFederatedSettingsIdentityProviderPemFileInfoCertificatesOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProvider.DataMongodbatlasFederatedSettingsIdentityProviderPemFileInfoCertificatesOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProvider.DataMongodbatlasFederatedSettingsIdentityProviderPemFileInfoCertificatesOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProvider.DataMongodbatlasFederatedSettingsIdentityProviderPemFileInfoCertificatesOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProvider.DataMongodbatlasFederatedSettingsIdentityProviderPemFileInfoCertificatesOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProvider.DataMongodbatlasFederatedSettingsIdentityProviderPemFileInfoCertificatesOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProvider.DataMongodbatlasFederatedSettingsIdentityProviderPemFileInfoCertificatesOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProvider.DataMongodbatlasFederatedSettingsIdentityProviderPemFileInfoCertificatesOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProvider.DataMongodbatlasFederatedSettingsIdentityProviderPemFileInfoCertificatesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProvider.DataMongodbatlasFederatedSettingsIdentityProviderPemFileInfoCertificatesOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProvider.DataMongodbatlasFederatedSettingsIdentityProviderPemFileInfoCertificatesOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProvider.DataMongodbatlasFederatedSettingsIdentityProviderPemFileInfoCertificatesOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProvider.DataMongodbatlasFederatedSettingsIdentityProviderPemFileInfoCertificatesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProvider.DataMongodbatlasFederatedSettingsIdentityProviderPemFileInfoCertificatesOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProvider.DataMongodbatlasFederatedSettingsIdentityProviderPemFileInfoCertificatesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProvider.DataMongodbatlasFederatedSettingsIdentityProviderPemFileInfoCertificatesOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProvider.DataMongodbatlasFederatedSettingsIdentityProviderPemFileInfoCertificatesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProvider.DataMongodbatlasFederatedSettingsIdentityProviderPemFileInfoCertificatesOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProvider.DataMongodbatlasFederatedSettingsIdentityProviderPemFileInfoCertificatesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProvider.DataMongodbatlasFederatedSettingsIdentityProviderPemFileInfoCertificatesOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProvider.DataMongodbatlasFederatedSettingsIdentityProviderPemFileInfoCertificatesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProvider.DataMongodbatlasFederatedSettingsIdentityProviderPemFileInfoCertificatesOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProvider.DataMongodbatlasFederatedSettingsIdentityProviderPemFileInfoCertificatesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProvider.DataMongodbatlasFederatedSettingsIdentityProviderPemFileInfoCertificatesOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProvider.DataMongodbatlasFederatedSettingsIdentityProviderPemFileInfoCertificatesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProvider.DataMongodbatlasFederatedSettingsIdentityProviderPemFileInfoCertificatesOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProvider.DataMongodbatlasFederatedSettingsIdentityProviderPemFileInfoCertificatesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProvider.DataMongodbatlasFederatedSettingsIdentityProviderPemFileInfoCertificatesOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProvider.DataMongodbatlasFederatedSettingsIdentityProviderPemFileInfoCertificatesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProvider.DataMongodbatlasFederatedSettingsIdentityProviderPemFileInfoCertificatesOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProvider.DataMongodbatlasFederatedSettingsIdentityProviderPemFileInfoCertificatesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProvider.DataMongodbatlasFederatedSettingsIdentityProviderPemFileInfoCertificatesOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProvider.DataMongodbatlasFederatedSettingsIdentityProviderPemFileInfoCertificatesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProvider.DataMongodbatlasFederatedSettingsIdentityProviderPemFileInfoCertificatesOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProvider.DataMongodbatlasFederatedSettingsIdentityProviderPemFileInfoCertificatesOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProvider.DataMongodbatlasFederatedSettingsIdentityProviderPemFileInfoCertificatesOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProvider.DataMongodbatlasFederatedSettingsIdentityProviderPemFileInfoCertificatesOutputReference.property.notAfter">not_after</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProvider.DataMongodbatlasFederatedSettingsIdentityProviderPemFileInfoCertificatesOutputReference.property.notBefore">not_before</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProvider.DataMongodbatlasFederatedSettingsIdentityProviderPemFileInfoCertificatesOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProvider.DataMongodbatlasFederatedSettingsIdentityProviderPemFileInfoCertificates">DataMongodbatlasFederatedSettingsIdentityProviderPemFileInfoCertificates</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProvider.DataMongodbatlasFederatedSettingsIdentityProviderPemFileInfoCertificatesOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProvider.DataMongodbatlasFederatedSettingsIdentityProviderPemFileInfoCertificatesOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `not_after`<sup>Required</sup> <a name="not_after" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProvider.DataMongodbatlasFederatedSettingsIdentityProviderPemFileInfoCertificatesOutputReference.property.notAfter"></a>

```python
not_after: str
```

- *Type:* str

---

##### `not_before`<sup>Required</sup> <a name="not_before" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProvider.DataMongodbatlasFederatedSettingsIdentityProviderPemFileInfoCertificatesOutputReference.property.notBefore"></a>

```python
not_before: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProvider.DataMongodbatlasFederatedSettingsIdentityProviderPemFileInfoCertificatesOutputReference.property.internalValue"></a>

```python
internal_value: DataMongodbatlasFederatedSettingsIdentityProviderPemFileInfoCertificates
```

- *Type:* <a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProvider.DataMongodbatlasFederatedSettingsIdentityProviderPemFileInfoCertificates">DataMongodbatlasFederatedSettingsIdentityProviderPemFileInfoCertificates</a>

---


### DataMongodbatlasFederatedSettingsIdentityProviderPemFileInfoList <a name="DataMongodbatlasFederatedSettingsIdentityProviderPemFileInfoList" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProvider.DataMongodbatlasFederatedSettingsIdentityProviderPemFileInfoList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProvider.DataMongodbatlasFederatedSettingsIdentityProviderPemFileInfoList.Initializer"></a>

```python
from cdktf_cdktf_provider_mongodbatlas import data_mongodbatlas_federated_settings_identity_provider

dataMongodbatlasFederatedSettingsIdentityProvider.DataMongodbatlasFederatedSettingsIdentityProviderPemFileInfoList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProvider.DataMongodbatlasFederatedSettingsIdentityProviderPemFileInfoList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProvider.DataMongodbatlasFederatedSettingsIdentityProviderPemFileInfoList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProvider.DataMongodbatlasFederatedSettingsIdentityProviderPemFileInfoList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProvider.DataMongodbatlasFederatedSettingsIdentityProviderPemFileInfoList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProvider.DataMongodbatlasFederatedSettingsIdentityProviderPemFileInfoList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProvider.DataMongodbatlasFederatedSettingsIdentityProviderPemFileInfoList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProvider.DataMongodbatlasFederatedSettingsIdentityProviderPemFileInfoList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProvider.DataMongodbatlasFederatedSettingsIdentityProviderPemFileInfoList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProvider.DataMongodbatlasFederatedSettingsIdentityProviderPemFileInfoList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProvider.DataMongodbatlasFederatedSettingsIdentityProviderPemFileInfoList.get">get</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProvider.DataMongodbatlasFederatedSettingsIdentityProviderPemFileInfoList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProvider.DataMongodbatlasFederatedSettingsIdentityProviderPemFileInfoList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProvider.DataMongodbatlasFederatedSettingsIdentityProviderPemFileInfoList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProvider.DataMongodbatlasFederatedSettingsIdentityProviderPemFileInfoList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProvider.DataMongodbatlasFederatedSettingsIdentityProviderPemFileInfoList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataMongodbatlasFederatedSettingsIdentityProviderPemFileInfoOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProvider.DataMongodbatlasFederatedSettingsIdentityProviderPemFileInfoList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProvider.DataMongodbatlasFederatedSettingsIdentityProviderPemFileInfoList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProvider.DataMongodbatlasFederatedSettingsIdentityProviderPemFileInfoList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProvider.DataMongodbatlasFederatedSettingsIdentityProviderPemFileInfoList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProvider.DataMongodbatlasFederatedSettingsIdentityProviderPemFileInfoList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataMongodbatlasFederatedSettingsIdentityProviderPemFileInfoOutputReference <a name="DataMongodbatlasFederatedSettingsIdentityProviderPemFileInfoOutputReference" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProvider.DataMongodbatlasFederatedSettingsIdentityProviderPemFileInfoOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProvider.DataMongodbatlasFederatedSettingsIdentityProviderPemFileInfoOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_mongodbatlas import data_mongodbatlas_federated_settings_identity_provider

dataMongodbatlasFederatedSettingsIdentityProvider.DataMongodbatlasFederatedSettingsIdentityProviderPemFileInfoOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProvider.DataMongodbatlasFederatedSettingsIdentityProviderPemFileInfoOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProvider.DataMongodbatlasFederatedSettingsIdentityProviderPemFileInfoOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProvider.DataMongodbatlasFederatedSettingsIdentityProviderPemFileInfoOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProvider.DataMongodbatlasFederatedSettingsIdentityProviderPemFileInfoOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProvider.DataMongodbatlasFederatedSettingsIdentityProviderPemFileInfoOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProvider.DataMongodbatlasFederatedSettingsIdentityProviderPemFileInfoOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProvider.DataMongodbatlasFederatedSettingsIdentityProviderPemFileInfoOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProvider.DataMongodbatlasFederatedSettingsIdentityProviderPemFileInfoOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProvider.DataMongodbatlasFederatedSettingsIdentityProviderPemFileInfoOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProvider.DataMongodbatlasFederatedSettingsIdentityProviderPemFileInfoOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProvider.DataMongodbatlasFederatedSettingsIdentityProviderPemFileInfoOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProvider.DataMongodbatlasFederatedSettingsIdentityProviderPemFileInfoOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProvider.DataMongodbatlasFederatedSettingsIdentityProviderPemFileInfoOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProvider.DataMongodbatlasFederatedSettingsIdentityProviderPemFileInfoOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProvider.DataMongodbatlasFederatedSettingsIdentityProviderPemFileInfoOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProvider.DataMongodbatlasFederatedSettingsIdentityProviderPemFileInfoOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProvider.DataMongodbatlasFederatedSettingsIdentityProviderPemFileInfoOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProvider.DataMongodbatlasFederatedSettingsIdentityProviderPemFileInfoOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProvider.DataMongodbatlasFederatedSettingsIdentityProviderPemFileInfoOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProvider.DataMongodbatlasFederatedSettingsIdentityProviderPemFileInfoOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProvider.DataMongodbatlasFederatedSettingsIdentityProviderPemFileInfoOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProvider.DataMongodbatlasFederatedSettingsIdentityProviderPemFileInfoOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProvider.DataMongodbatlasFederatedSettingsIdentityProviderPemFileInfoOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProvider.DataMongodbatlasFederatedSettingsIdentityProviderPemFileInfoOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProvider.DataMongodbatlasFederatedSettingsIdentityProviderPemFileInfoOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProvider.DataMongodbatlasFederatedSettingsIdentityProviderPemFileInfoOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProvider.DataMongodbatlasFederatedSettingsIdentityProviderPemFileInfoOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProvider.DataMongodbatlasFederatedSettingsIdentityProviderPemFileInfoOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProvider.DataMongodbatlasFederatedSettingsIdentityProviderPemFileInfoOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProvider.DataMongodbatlasFederatedSettingsIdentityProviderPemFileInfoOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProvider.DataMongodbatlasFederatedSettingsIdentityProviderPemFileInfoOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProvider.DataMongodbatlasFederatedSettingsIdentityProviderPemFileInfoOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProvider.DataMongodbatlasFederatedSettingsIdentityProviderPemFileInfoOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProvider.DataMongodbatlasFederatedSettingsIdentityProviderPemFileInfoOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProvider.DataMongodbatlasFederatedSettingsIdentityProviderPemFileInfoOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProvider.DataMongodbatlasFederatedSettingsIdentityProviderPemFileInfoOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProvider.DataMongodbatlasFederatedSettingsIdentityProviderPemFileInfoOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProvider.DataMongodbatlasFederatedSettingsIdentityProviderPemFileInfoOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProvider.DataMongodbatlasFederatedSettingsIdentityProviderPemFileInfoOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProvider.DataMongodbatlasFederatedSettingsIdentityProviderPemFileInfoOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProvider.DataMongodbatlasFederatedSettingsIdentityProviderPemFileInfoOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProvider.DataMongodbatlasFederatedSettingsIdentityProviderPemFileInfoOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProvider.DataMongodbatlasFederatedSettingsIdentityProviderPemFileInfoOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProvider.DataMongodbatlasFederatedSettingsIdentityProviderPemFileInfoOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProvider.DataMongodbatlasFederatedSettingsIdentityProviderPemFileInfoOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProvider.DataMongodbatlasFederatedSettingsIdentityProviderPemFileInfoOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProvider.DataMongodbatlasFederatedSettingsIdentityProviderPemFileInfoOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProvider.DataMongodbatlasFederatedSettingsIdentityProviderPemFileInfoOutputReference.property.certificates">certificates</a></code> | <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProvider.DataMongodbatlasFederatedSettingsIdentityProviderPemFileInfoCertificatesList">DataMongodbatlasFederatedSettingsIdentityProviderPemFileInfoCertificatesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProvider.DataMongodbatlasFederatedSettingsIdentityProviderPemFileInfoOutputReference.property.fileName">file_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProvider.DataMongodbatlasFederatedSettingsIdentityProviderPemFileInfoOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProvider.DataMongodbatlasFederatedSettingsIdentityProviderPemFileInfo">DataMongodbatlasFederatedSettingsIdentityProviderPemFileInfo</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProvider.DataMongodbatlasFederatedSettingsIdentityProviderPemFileInfoOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProvider.DataMongodbatlasFederatedSettingsIdentityProviderPemFileInfoOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `certificates`<sup>Required</sup> <a name="certificates" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProvider.DataMongodbatlasFederatedSettingsIdentityProviderPemFileInfoOutputReference.property.certificates"></a>

```python
certificates: DataMongodbatlasFederatedSettingsIdentityProviderPemFileInfoCertificatesList
```

- *Type:* <a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProvider.DataMongodbatlasFederatedSettingsIdentityProviderPemFileInfoCertificatesList">DataMongodbatlasFederatedSettingsIdentityProviderPemFileInfoCertificatesList</a>

---

##### `file_name`<sup>Required</sup> <a name="file_name" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProvider.DataMongodbatlasFederatedSettingsIdentityProviderPemFileInfoOutputReference.property.fileName"></a>

```python
file_name: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProvider.DataMongodbatlasFederatedSettingsIdentityProviderPemFileInfoOutputReference.property.internalValue"></a>

```python
internal_value: DataMongodbatlasFederatedSettingsIdentityProviderPemFileInfo
```

- *Type:* <a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsIdentityProvider.DataMongodbatlasFederatedSettingsIdentityProviderPemFileInfo">DataMongodbatlasFederatedSettingsIdentityProviderPemFileInfo</a>

---



