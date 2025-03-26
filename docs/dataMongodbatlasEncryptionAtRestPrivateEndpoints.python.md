# `dataMongodbatlasEncryptionAtRestPrivateEndpoints` Submodule <a name="`dataMongodbatlasEncryptionAtRestPrivateEndpoints` Submodule" id="@cdktf/provider-mongodbatlas.dataMongodbatlasEncryptionAtRestPrivateEndpoints"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataMongodbatlasEncryptionAtRestPrivateEndpoints <a name="DataMongodbatlasEncryptionAtRestPrivateEndpoints" id="@cdktf/provider-mongodbatlas.dataMongodbatlasEncryptionAtRestPrivateEndpoints.DataMongodbatlasEncryptionAtRestPrivateEndpoints"></a>

Represents a {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.31.0/docs/data-sources/encryption_at_rest_private_endpoints mongodbatlas_encryption_at_rest_private_endpoints}.

#### Initializers <a name="Initializers" id="@cdktf/provider-mongodbatlas.dataMongodbatlasEncryptionAtRestPrivateEndpoints.DataMongodbatlasEncryptionAtRestPrivateEndpoints.Initializer"></a>

```python
from cdktf_cdktf_provider_mongodbatlas import data_mongodbatlas_encryption_at_rest_private_endpoints

dataMongodbatlasEncryptionAtRestPrivateEndpoints.DataMongodbatlasEncryptionAtRestPrivateEndpoints(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  cloud_provider: str,
  project_id: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasEncryptionAtRestPrivateEndpoints.DataMongodbatlasEncryptionAtRestPrivateEndpoints.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasEncryptionAtRestPrivateEndpoints.DataMongodbatlasEncryptionAtRestPrivateEndpoints.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasEncryptionAtRestPrivateEndpoints.DataMongodbatlasEncryptionAtRestPrivateEndpoints.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasEncryptionAtRestPrivateEndpoints.DataMongodbatlasEncryptionAtRestPrivateEndpoints.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasEncryptionAtRestPrivateEndpoints.DataMongodbatlasEncryptionAtRestPrivateEndpoints.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasEncryptionAtRestPrivateEndpoints.DataMongodbatlasEncryptionAtRestPrivateEndpoints.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasEncryptionAtRestPrivateEndpoints.DataMongodbatlasEncryptionAtRestPrivateEndpoints.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasEncryptionAtRestPrivateEndpoints.DataMongodbatlasEncryptionAtRestPrivateEndpoints.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasEncryptionAtRestPrivateEndpoints.DataMongodbatlasEncryptionAtRestPrivateEndpoints.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasEncryptionAtRestPrivateEndpoints.DataMongodbatlasEncryptionAtRestPrivateEndpoints.Initializer.parameter.cloudProvider">cloud_provider</a></code> | <code>str</code> | Label that identifies the cloud provider for the Encryption At Rest private endpoint. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasEncryptionAtRestPrivateEndpoints.DataMongodbatlasEncryptionAtRestPrivateEndpoints.Initializer.parameter.projectId">project_id</a></code> | <code>str</code> | Unique 24-hexadecimal digit string that identifies your project. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-mongodbatlas.dataMongodbatlasEncryptionAtRestPrivateEndpoints.DataMongodbatlasEncryptionAtRestPrivateEndpoints.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-mongodbatlas.dataMongodbatlasEncryptionAtRestPrivateEndpoints.DataMongodbatlasEncryptionAtRestPrivateEndpoints.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-mongodbatlas.dataMongodbatlasEncryptionAtRestPrivateEndpoints.DataMongodbatlasEncryptionAtRestPrivateEndpoints.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-mongodbatlas.dataMongodbatlasEncryptionAtRestPrivateEndpoints.DataMongodbatlasEncryptionAtRestPrivateEndpoints.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-mongodbatlas.dataMongodbatlasEncryptionAtRestPrivateEndpoints.DataMongodbatlasEncryptionAtRestPrivateEndpoints.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-mongodbatlas.dataMongodbatlasEncryptionAtRestPrivateEndpoints.DataMongodbatlasEncryptionAtRestPrivateEndpoints.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-mongodbatlas.dataMongodbatlasEncryptionAtRestPrivateEndpoints.DataMongodbatlasEncryptionAtRestPrivateEndpoints.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-mongodbatlas.dataMongodbatlasEncryptionAtRestPrivateEndpoints.DataMongodbatlasEncryptionAtRestPrivateEndpoints.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-mongodbatlas.dataMongodbatlasEncryptionAtRestPrivateEndpoints.DataMongodbatlasEncryptionAtRestPrivateEndpoints.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `cloud_provider`<sup>Required</sup> <a name="cloud_provider" id="@cdktf/provider-mongodbatlas.dataMongodbatlasEncryptionAtRestPrivateEndpoints.DataMongodbatlasEncryptionAtRestPrivateEndpoints.Initializer.parameter.cloudProvider"></a>

- *Type:* str

Label that identifies the cloud provider for the Encryption At Rest private endpoint.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.31.0/docs/data-sources/encryption_at_rest_private_endpoints#cloud_provider DataMongodbatlasEncryptionAtRestPrivateEndpoints#cloud_provider}

---

##### `project_id`<sup>Required</sup> <a name="project_id" id="@cdktf/provider-mongodbatlas.dataMongodbatlasEncryptionAtRestPrivateEndpoints.DataMongodbatlasEncryptionAtRestPrivateEndpoints.Initializer.parameter.projectId"></a>

- *Type:* str

Unique 24-hexadecimal digit string that identifies your project.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.31.0/docs/data-sources/encryption_at_rest_private_endpoints#project_id DataMongodbatlasEncryptionAtRestPrivateEndpoints#project_id}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasEncryptionAtRestPrivateEndpoints.DataMongodbatlasEncryptionAtRestPrivateEndpoints.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasEncryptionAtRestPrivateEndpoints.DataMongodbatlasEncryptionAtRestPrivateEndpoints.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasEncryptionAtRestPrivateEndpoints.DataMongodbatlasEncryptionAtRestPrivateEndpoints.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasEncryptionAtRestPrivateEndpoints.DataMongodbatlasEncryptionAtRestPrivateEndpoints.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasEncryptionAtRestPrivateEndpoints.DataMongodbatlasEncryptionAtRestPrivateEndpoints.toHclTerraform">to_hcl_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasEncryptionAtRestPrivateEndpoints.DataMongodbatlasEncryptionAtRestPrivateEndpoints.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasEncryptionAtRestPrivateEndpoints.DataMongodbatlasEncryptionAtRestPrivateEndpoints.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasEncryptionAtRestPrivateEndpoints.DataMongodbatlasEncryptionAtRestPrivateEndpoints.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasEncryptionAtRestPrivateEndpoints.DataMongodbatlasEncryptionAtRestPrivateEndpoints.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasEncryptionAtRestPrivateEndpoints.DataMongodbatlasEncryptionAtRestPrivateEndpoints.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasEncryptionAtRestPrivateEndpoints.DataMongodbatlasEncryptionAtRestPrivateEndpoints.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasEncryptionAtRestPrivateEndpoints.DataMongodbatlasEncryptionAtRestPrivateEndpoints.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasEncryptionAtRestPrivateEndpoints.DataMongodbatlasEncryptionAtRestPrivateEndpoints.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasEncryptionAtRestPrivateEndpoints.DataMongodbatlasEncryptionAtRestPrivateEndpoints.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasEncryptionAtRestPrivateEndpoints.DataMongodbatlasEncryptionAtRestPrivateEndpoints.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasEncryptionAtRestPrivateEndpoints.DataMongodbatlasEncryptionAtRestPrivateEndpoints.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasEncryptionAtRestPrivateEndpoints.DataMongodbatlasEncryptionAtRestPrivateEndpoints.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-mongodbatlas.dataMongodbatlasEncryptionAtRestPrivateEndpoints.DataMongodbatlasEncryptionAtRestPrivateEndpoints.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-mongodbatlas.dataMongodbatlasEncryptionAtRestPrivateEndpoints.DataMongodbatlasEncryptionAtRestPrivateEndpoints.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-mongodbatlas.dataMongodbatlasEncryptionAtRestPrivateEndpoints.DataMongodbatlasEncryptionAtRestPrivateEndpoints.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-mongodbatlas.dataMongodbatlasEncryptionAtRestPrivateEndpoints.DataMongodbatlasEncryptionAtRestPrivateEndpoints.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-mongodbatlas.dataMongodbatlasEncryptionAtRestPrivateEndpoints.DataMongodbatlasEncryptionAtRestPrivateEndpoints.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-mongodbatlas.dataMongodbatlasEncryptionAtRestPrivateEndpoints.DataMongodbatlasEncryptionAtRestPrivateEndpoints.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-mongodbatlas.dataMongodbatlasEncryptionAtRestPrivateEndpoints.DataMongodbatlasEncryptionAtRestPrivateEndpoints.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktf/provider-mongodbatlas.dataMongodbatlasEncryptionAtRestPrivateEndpoints.DataMongodbatlasEncryptionAtRestPrivateEndpoints.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-mongodbatlas.dataMongodbatlasEncryptionAtRestPrivateEndpoints.DataMongodbatlasEncryptionAtRestPrivateEndpoints.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-mongodbatlas.dataMongodbatlasEncryptionAtRestPrivateEndpoints.DataMongodbatlasEncryptionAtRestPrivateEndpoints.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasEncryptionAtRestPrivateEndpoints.DataMongodbatlasEncryptionAtRestPrivateEndpoints.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasEncryptionAtRestPrivateEndpoints.DataMongodbatlasEncryptionAtRestPrivateEndpoints.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasEncryptionAtRestPrivateEndpoints.DataMongodbatlasEncryptionAtRestPrivateEndpoints.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasEncryptionAtRestPrivateEndpoints.DataMongodbatlasEncryptionAtRestPrivateEndpoints.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasEncryptionAtRestPrivateEndpoints.DataMongodbatlasEncryptionAtRestPrivateEndpoints.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasEncryptionAtRestPrivateEndpoints.DataMongodbatlasEncryptionAtRestPrivateEndpoints.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasEncryptionAtRestPrivateEndpoints.DataMongodbatlasEncryptionAtRestPrivateEndpoints.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasEncryptionAtRestPrivateEndpoints.DataMongodbatlasEncryptionAtRestPrivateEndpoints.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasEncryptionAtRestPrivateEndpoints.DataMongodbatlasEncryptionAtRestPrivateEndpoints.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasEncryptionAtRestPrivateEndpoints.DataMongodbatlasEncryptionAtRestPrivateEndpoints.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasEncryptionAtRestPrivateEndpoints.DataMongodbatlasEncryptionAtRestPrivateEndpoints.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasEncryptionAtRestPrivateEndpoints.DataMongodbatlasEncryptionAtRestPrivateEndpoints.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasEncryptionAtRestPrivateEndpoints.DataMongodbatlasEncryptionAtRestPrivateEndpoints.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasEncryptionAtRestPrivateEndpoints.DataMongodbatlasEncryptionAtRestPrivateEndpoints.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasEncryptionAtRestPrivateEndpoints.DataMongodbatlasEncryptionAtRestPrivateEndpoints.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasEncryptionAtRestPrivateEndpoints.DataMongodbatlasEncryptionAtRestPrivateEndpoints.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasEncryptionAtRestPrivateEndpoints.DataMongodbatlasEncryptionAtRestPrivateEndpoints.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasEncryptionAtRestPrivateEndpoints.DataMongodbatlasEncryptionAtRestPrivateEndpoints.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasEncryptionAtRestPrivateEndpoints.DataMongodbatlasEncryptionAtRestPrivateEndpoints.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasEncryptionAtRestPrivateEndpoints.DataMongodbatlasEncryptionAtRestPrivateEndpoints.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasEncryptionAtRestPrivateEndpoints.DataMongodbatlasEncryptionAtRestPrivateEndpoints.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasEncryptionAtRestPrivateEndpoints.DataMongodbatlasEncryptionAtRestPrivateEndpoints.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasEncryptionAtRestPrivateEndpoints.DataMongodbatlasEncryptionAtRestPrivateEndpoints.isTerraformDataSource">is_terraform_data_source</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasEncryptionAtRestPrivateEndpoints.DataMongodbatlasEncryptionAtRestPrivateEndpoints.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a DataMongodbatlasEncryptionAtRestPrivateEndpoints resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-mongodbatlas.dataMongodbatlasEncryptionAtRestPrivateEndpoints.DataMongodbatlasEncryptionAtRestPrivateEndpoints.isConstruct"></a>

```python
from cdktf_cdktf_provider_mongodbatlas import data_mongodbatlas_encryption_at_rest_private_endpoints

dataMongodbatlasEncryptionAtRestPrivateEndpoints.DataMongodbatlasEncryptionAtRestPrivateEndpoints.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-mongodbatlas.dataMongodbatlasEncryptionAtRestPrivateEndpoints.DataMongodbatlasEncryptionAtRestPrivateEndpoints.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-mongodbatlas.dataMongodbatlasEncryptionAtRestPrivateEndpoints.DataMongodbatlasEncryptionAtRestPrivateEndpoints.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_mongodbatlas import data_mongodbatlas_encryption_at_rest_private_endpoints

dataMongodbatlasEncryptionAtRestPrivateEndpoints.DataMongodbatlasEncryptionAtRestPrivateEndpoints.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-mongodbatlas.dataMongodbatlasEncryptionAtRestPrivateEndpoints.DataMongodbatlasEncryptionAtRestPrivateEndpoints.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_data_source` <a name="is_terraform_data_source" id="@cdktf/provider-mongodbatlas.dataMongodbatlasEncryptionAtRestPrivateEndpoints.DataMongodbatlasEncryptionAtRestPrivateEndpoints.isTerraformDataSource"></a>

```python
from cdktf_cdktf_provider_mongodbatlas import data_mongodbatlas_encryption_at_rest_private_endpoints

dataMongodbatlasEncryptionAtRestPrivateEndpoints.DataMongodbatlasEncryptionAtRestPrivateEndpoints.is_terraform_data_source(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-mongodbatlas.dataMongodbatlasEncryptionAtRestPrivateEndpoints.DataMongodbatlasEncryptionAtRestPrivateEndpoints.isTerraformDataSource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-mongodbatlas.dataMongodbatlasEncryptionAtRestPrivateEndpoints.DataMongodbatlasEncryptionAtRestPrivateEndpoints.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_mongodbatlas import data_mongodbatlas_encryption_at_rest_private_endpoints

dataMongodbatlasEncryptionAtRestPrivateEndpoints.DataMongodbatlasEncryptionAtRestPrivateEndpoints.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a DataMongodbatlasEncryptionAtRestPrivateEndpoints resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-mongodbatlas.dataMongodbatlasEncryptionAtRestPrivateEndpoints.DataMongodbatlasEncryptionAtRestPrivateEndpoints.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-mongodbatlas.dataMongodbatlasEncryptionAtRestPrivateEndpoints.DataMongodbatlasEncryptionAtRestPrivateEndpoints.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the DataMongodbatlasEncryptionAtRestPrivateEndpoints to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-mongodbatlas.dataMongodbatlasEncryptionAtRestPrivateEndpoints.DataMongodbatlasEncryptionAtRestPrivateEndpoints.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing DataMongodbatlasEncryptionAtRestPrivateEndpoints that should be imported.

Refer to the {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.31.0/docs/data-sources/encryption_at_rest_private_endpoints#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-mongodbatlas.dataMongodbatlasEncryptionAtRestPrivateEndpoints.DataMongodbatlasEncryptionAtRestPrivateEndpoints.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataMongodbatlasEncryptionAtRestPrivateEndpoints to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasEncryptionAtRestPrivateEndpoints.DataMongodbatlasEncryptionAtRestPrivateEndpoints.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasEncryptionAtRestPrivateEndpoints.DataMongodbatlasEncryptionAtRestPrivateEndpoints.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasEncryptionAtRestPrivateEndpoints.DataMongodbatlasEncryptionAtRestPrivateEndpoints.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasEncryptionAtRestPrivateEndpoints.DataMongodbatlasEncryptionAtRestPrivateEndpoints.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasEncryptionAtRestPrivateEndpoints.DataMongodbatlasEncryptionAtRestPrivateEndpoints.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasEncryptionAtRestPrivateEndpoints.DataMongodbatlasEncryptionAtRestPrivateEndpoints.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasEncryptionAtRestPrivateEndpoints.DataMongodbatlasEncryptionAtRestPrivateEndpoints.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasEncryptionAtRestPrivateEndpoints.DataMongodbatlasEncryptionAtRestPrivateEndpoints.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasEncryptionAtRestPrivateEndpoints.DataMongodbatlasEncryptionAtRestPrivateEndpoints.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasEncryptionAtRestPrivateEndpoints.DataMongodbatlasEncryptionAtRestPrivateEndpoints.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasEncryptionAtRestPrivateEndpoints.DataMongodbatlasEncryptionAtRestPrivateEndpoints.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasEncryptionAtRestPrivateEndpoints.DataMongodbatlasEncryptionAtRestPrivateEndpoints.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasEncryptionAtRestPrivateEndpoints.DataMongodbatlasEncryptionAtRestPrivateEndpoints.property.results">results</a></code> | <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasEncryptionAtRestPrivateEndpoints.DataMongodbatlasEncryptionAtRestPrivateEndpointsResultsList">DataMongodbatlasEncryptionAtRestPrivateEndpointsResultsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasEncryptionAtRestPrivateEndpoints.DataMongodbatlasEncryptionAtRestPrivateEndpoints.property.cloudProviderInput">cloud_provider_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasEncryptionAtRestPrivateEndpoints.DataMongodbatlasEncryptionAtRestPrivateEndpoints.property.projectIdInput">project_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasEncryptionAtRestPrivateEndpoints.DataMongodbatlasEncryptionAtRestPrivateEndpoints.property.cloudProvider">cloud_provider</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasEncryptionAtRestPrivateEndpoints.DataMongodbatlasEncryptionAtRestPrivateEndpoints.property.projectId">project_id</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-mongodbatlas.dataMongodbatlasEncryptionAtRestPrivateEndpoints.DataMongodbatlasEncryptionAtRestPrivateEndpoints.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-mongodbatlas.dataMongodbatlasEncryptionAtRestPrivateEndpoints.DataMongodbatlasEncryptionAtRestPrivateEndpoints.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-mongodbatlas.dataMongodbatlasEncryptionAtRestPrivateEndpoints.DataMongodbatlasEncryptionAtRestPrivateEndpoints.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-mongodbatlas.dataMongodbatlasEncryptionAtRestPrivateEndpoints.DataMongodbatlasEncryptionAtRestPrivateEndpoints.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-mongodbatlas.dataMongodbatlasEncryptionAtRestPrivateEndpoints.DataMongodbatlasEncryptionAtRestPrivateEndpoints.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-mongodbatlas.dataMongodbatlasEncryptionAtRestPrivateEndpoints.DataMongodbatlasEncryptionAtRestPrivateEndpoints.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-mongodbatlas.dataMongodbatlasEncryptionAtRestPrivateEndpoints.DataMongodbatlasEncryptionAtRestPrivateEndpoints.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-mongodbatlas.dataMongodbatlasEncryptionAtRestPrivateEndpoints.DataMongodbatlasEncryptionAtRestPrivateEndpoints.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-mongodbatlas.dataMongodbatlasEncryptionAtRestPrivateEndpoints.DataMongodbatlasEncryptionAtRestPrivateEndpoints.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-mongodbatlas.dataMongodbatlasEncryptionAtRestPrivateEndpoints.DataMongodbatlasEncryptionAtRestPrivateEndpoints.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-mongodbatlas.dataMongodbatlasEncryptionAtRestPrivateEndpoints.DataMongodbatlasEncryptionAtRestPrivateEndpoints.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-mongodbatlas.dataMongodbatlasEncryptionAtRestPrivateEndpoints.DataMongodbatlasEncryptionAtRestPrivateEndpoints.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `results`<sup>Required</sup> <a name="results" id="@cdktf/provider-mongodbatlas.dataMongodbatlasEncryptionAtRestPrivateEndpoints.DataMongodbatlasEncryptionAtRestPrivateEndpoints.property.results"></a>

```python
results: DataMongodbatlasEncryptionAtRestPrivateEndpointsResultsList
```

- *Type:* <a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasEncryptionAtRestPrivateEndpoints.DataMongodbatlasEncryptionAtRestPrivateEndpointsResultsList">DataMongodbatlasEncryptionAtRestPrivateEndpointsResultsList</a>

---

##### `cloud_provider_input`<sup>Optional</sup> <a name="cloud_provider_input" id="@cdktf/provider-mongodbatlas.dataMongodbatlasEncryptionAtRestPrivateEndpoints.DataMongodbatlasEncryptionAtRestPrivateEndpoints.property.cloudProviderInput"></a>

```python
cloud_provider_input: str
```

- *Type:* str

---

##### `project_id_input`<sup>Optional</sup> <a name="project_id_input" id="@cdktf/provider-mongodbatlas.dataMongodbatlasEncryptionAtRestPrivateEndpoints.DataMongodbatlasEncryptionAtRestPrivateEndpoints.property.projectIdInput"></a>

```python
project_id_input: str
```

- *Type:* str

---

##### `cloud_provider`<sup>Required</sup> <a name="cloud_provider" id="@cdktf/provider-mongodbatlas.dataMongodbatlasEncryptionAtRestPrivateEndpoints.DataMongodbatlasEncryptionAtRestPrivateEndpoints.property.cloudProvider"></a>

```python
cloud_provider: str
```

- *Type:* str

---

##### `project_id`<sup>Required</sup> <a name="project_id" id="@cdktf/provider-mongodbatlas.dataMongodbatlasEncryptionAtRestPrivateEndpoints.DataMongodbatlasEncryptionAtRestPrivateEndpoints.property.projectId"></a>

```python
project_id: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasEncryptionAtRestPrivateEndpoints.DataMongodbatlasEncryptionAtRestPrivateEndpoints.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-mongodbatlas.dataMongodbatlasEncryptionAtRestPrivateEndpoints.DataMongodbatlasEncryptionAtRestPrivateEndpoints.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DataMongodbatlasEncryptionAtRestPrivateEndpointsConfig <a name="DataMongodbatlasEncryptionAtRestPrivateEndpointsConfig" id="@cdktf/provider-mongodbatlas.dataMongodbatlasEncryptionAtRestPrivateEndpoints.DataMongodbatlasEncryptionAtRestPrivateEndpointsConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-mongodbatlas.dataMongodbatlasEncryptionAtRestPrivateEndpoints.DataMongodbatlasEncryptionAtRestPrivateEndpointsConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_mongodbatlas import data_mongodbatlas_encryption_at_rest_private_endpoints

dataMongodbatlasEncryptionAtRestPrivateEndpoints.DataMongodbatlasEncryptionAtRestPrivateEndpointsConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  cloud_provider: str,
  project_id: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasEncryptionAtRestPrivateEndpoints.DataMongodbatlasEncryptionAtRestPrivateEndpointsConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasEncryptionAtRestPrivateEndpoints.DataMongodbatlasEncryptionAtRestPrivateEndpointsConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasEncryptionAtRestPrivateEndpoints.DataMongodbatlasEncryptionAtRestPrivateEndpointsConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasEncryptionAtRestPrivateEndpoints.DataMongodbatlasEncryptionAtRestPrivateEndpointsConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasEncryptionAtRestPrivateEndpoints.DataMongodbatlasEncryptionAtRestPrivateEndpointsConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasEncryptionAtRestPrivateEndpoints.DataMongodbatlasEncryptionAtRestPrivateEndpointsConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasEncryptionAtRestPrivateEndpoints.DataMongodbatlasEncryptionAtRestPrivateEndpointsConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasEncryptionAtRestPrivateEndpoints.DataMongodbatlasEncryptionAtRestPrivateEndpointsConfig.property.cloudProvider">cloud_provider</a></code> | <code>str</code> | Label that identifies the cloud provider for the Encryption At Rest private endpoint. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasEncryptionAtRestPrivateEndpoints.DataMongodbatlasEncryptionAtRestPrivateEndpointsConfig.property.projectId">project_id</a></code> | <code>str</code> | Unique 24-hexadecimal digit string that identifies your project. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-mongodbatlas.dataMongodbatlasEncryptionAtRestPrivateEndpoints.DataMongodbatlasEncryptionAtRestPrivateEndpointsConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-mongodbatlas.dataMongodbatlasEncryptionAtRestPrivateEndpoints.DataMongodbatlasEncryptionAtRestPrivateEndpointsConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-mongodbatlas.dataMongodbatlasEncryptionAtRestPrivateEndpoints.DataMongodbatlasEncryptionAtRestPrivateEndpointsConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-mongodbatlas.dataMongodbatlasEncryptionAtRestPrivateEndpoints.DataMongodbatlasEncryptionAtRestPrivateEndpointsConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-mongodbatlas.dataMongodbatlasEncryptionAtRestPrivateEndpoints.DataMongodbatlasEncryptionAtRestPrivateEndpointsConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-mongodbatlas.dataMongodbatlasEncryptionAtRestPrivateEndpoints.DataMongodbatlasEncryptionAtRestPrivateEndpointsConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-mongodbatlas.dataMongodbatlasEncryptionAtRestPrivateEndpoints.DataMongodbatlasEncryptionAtRestPrivateEndpointsConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `cloud_provider`<sup>Required</sup> <a name="cloud_provider" id="@cdktf/provider-mongodbatlas.dataMongodbatlasEncryptionAtRestPrivateEndpoints.DataMongodbatlasEncryptionAtRestPrivateEndpointsConfig.property.cloudProvider"></a>

```python
cloud_provider: str
```

- *Type:* str

Label that identifies the cloud provider for the Encryption At Rest private endpoint.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.31.0/docs/data-sources/encryption_at_rest_private_endpoints#cloud_provider DataMongodbatlasEncryptionAtRestPrivateEndpoints#cloud_provider}

---

##### `project_id`<sup>Required</sup> <a name="project_id" id="@cdktf/provider-mongodbatlas.dataMongodbatlasEncryptionAtRestPrivateEndpoints.DataMongodbatlasEncryptionAtRestPrivateEndpointsConfig.property.projectId"></a>

```python
project_id: str
```

- *Type:* str

Unique 24-hexadecimal digit string that identifies your project.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.31.0/docs/data-sources/encryption_at_rest_private_endpoints#project_id DataMongodbatlasEncryptionAtRestPrivateEndpoints#project_id}

---

### DataMongodbatlasEncryptionAtRestPrivateEndpointsResults <a name="DataMongodbatlasEncryptionAtRestPrivateEndpointsResults" id="@cdktf/provider-mongodbatlas.dataMongodbatlasEncryptionAtRestPrivateEndpoints.DataMongodbatlasEncryptionAtRestPrivateEndpointsResults"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-mongodbatlas.dataMongodbatlasEncryptionAtRestPrivateEndpoints.DataMongodbatlasEncryptionAtRestPrivateEndpointsResults.Initializer"></a>

```python
from cdktf_cdktf_provider_mongodbatlas import data_mongodbatlas_encryption_at_rest_private_endpoints

dataMongodbatlasEncryptionAtRestPrivateEndpoints.DataMongodbatlasEncryptionAtRestPrivateEndpointsResults()
```


## Classes <a name="Classes" id="Classes"></a>

### DataMongodbatlasEncryptionAtRestPrivateEndpointsResultsList <a name="DataMongodbatlasEncryptionAtRestPrivateEndpointsResultsList" id="@cdktf/provider-mongodbatlas.dataMongodbatlasEncryptionAtRestPrivateEndpoints.DataMongodbatlasEncryptionAtRestPrivateEndpointsResultsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-mongodbatlas.dataMongodbatlasEncryptionAtRestPrivateEndpoints.DataMongodbatlasEncryptionAtRestPrivateEndpointsResultsList.Initializer"></a>

```python
from cdktf_cdktf_provider_mongodbatlas import data_mongodbatlas_encryption_at_rest_private_endpoints

dataMongodbatlasEncryptionAtRestPrivateEndpoints.DataMongodbatlasEncryptionAtRestPrivateEndpointsResultsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasEncryptionAtRestPrivateEndpoints.DataMongodbatlasEncryptionAtRestPrivateEndpointsResultsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasEncryptionAtRestPrivateEndpoints.DataMongodbatlasEncryptionAtRestPrivateEndpointsResultsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasEncryptionAtRestPrivateEndpoints.DataMongodbatlasEncryptionAtRestPrivateEndpointsResultsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-mongodbatlas.dataMongodbatlasEncryptionAtRestPrivateEndpoints.DataMongodbatlasEncryptionAtRestPrivateEndpointsResultsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasEncryptionAtRestPrivateEndpoints.DataMongodbatlasEncryptionAtRestPrivateEndpointsResultsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-mongodbatlas.dataMongodbatlasEncryptionAtRestPrivateEndpoints.DataMongodbatlasEncryptionAtRestPrivateEndpointsResultsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasEncryptionAtRestPrivateEndpoints.DataMongodbatlasEncryptionAtRestPrivateEndpointsResultsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasEncryptionAtRestPrivateEndpoints.DataMongodbatlasEncryptionAtRestPrivateEndpointsResultsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasEncryptionAtRestPrivateEndpoints.DataMongodbatlasEncryptionAtRestPrivateEndpointsResultsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasEncryptionAtRestPrivateEndpoints.DataMongodbatlasEncryptionAtRestPrivateEndpointsResultsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasEncryptionAtRestPrivateEndpoints.DataMongodbatlasEncryptionAtRestPrivateEndpointsResultsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-mongodbatlas.dataMongodbatlasEncryptionAtRestPrivateEndpoints.DataMongodbatlasEncryptionAtRestPrivateEndpointsResultsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-mongodbatlas.dataMongodbatlasEncryptionAtRestPrivateEndpoints.DataMongodbatlasEncryptionAtRestPrivateEndpointsResultsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-mongodbatlas.dataMongodbatlasEncryptionAtRestPrivateEndpoints.DataMongodbatlasEncryptionAtRestPrivateEndpointsResultsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-mongodbatlas.dataMongodbatlasEncryptionAtRestPrivateEndpoints.DataMongodbatlasEncryptionAtRestPrivateEndpointsResultsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-mongodbatlas.dataMongodbatlasEncryptionAtRestPrivateEndpoints.DataMongodbatlasEncryptionAtRestPrivateEndpointsResultsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-mongodbatlas.dataMongodbatlasEncryptionAtRestPrivateEndpoints.DataMongodbatlasEncryptionAtRestPrivateEndpointsResultsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-mongodbatlas.dataMongodbatlasEncryptionAtRestPrivateEndpoints.DataMongodbatlasEncryptionAtRestPrivateEndpointsResultsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataMongodbatlasEncryptionAtRestPrivateEndpointsResultsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-mongodbatlas.dataMongodbatlasEncryptionAtRestPrivateEndpoints.DataMongodbatlasEncryptionAtRestPrivateEndpointsResultsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasEncryptionAtRestPrivateEndpoints.DataMongodbatlasEncryptionAtRestPrivateEndpointsResultsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasEncryptionAtRestPrivateEndpoints.DataMongodbatlasEncryptionAtRestPrivateEndpointsResultsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-mongodbatlas.dataMongodbatlasEncryptionAtRestPrivateEndpoints.DataMongodbatlasEncryptionAtRestPrivateEndpointsResultsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-mongodbatlas.dataMongodbatlasEncryptionAtRestPrivateEndpoints.DataMongodbatlasEncryptionAtRestPrivateEndpointsResultsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataMongodbatlasEncryptionAtRestPrivateEndpointsResultsOutputReference <a name="DataMongodbatlasEncryptionAtRestPrivateEndpointsResultsOutputReference" id="@cdktf/provider-mongodbatlas.dataMongodbatlasEncryptionAtRestPrivateEndpoints.DataMongodbatlasEncryptionAtRestPrivateEndpointsResultsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-mongodbatlas.dataMongodbatlasEncryptionAtRestPrivateEndpoints.DataMongodbatlasEncryptionAtRestPrivateEndpointsResultsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_mongodbatlas import data_mongodbatlas_encryption_at_rest_private_endpoints

dataMongodbatlasEncryptionAtRestPrivateEndpoints.DataMongodbatlasEncryptionAtRestPrivateEndpointsResultsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasEncryptionAtRestPrivateEndpoints.DataMongodbatlasEncryptionAtRestPrivateEndpointsResultsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasEncryptionAtRestPrivateEndpoints.DataMongodbatlasEncryptionAtRestPrivateEndpointsResultsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasEncryptionAtRestPrivateEndpoints.DataMongodbatlasEncryptionAtRestPrivateEndpointsResultsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasEncryptionAtRestPrivateEndpoints.DataMongodbatlasEncryptionAtRestPrivateEndpointsResultsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-mongodbatlas.dataMongodbatlasEncryptionAtRestPrivateEndpoints.DataMongodbatlasEncryptionAtRestPrivateEndpointsResultsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasEncryptionAtRestPrivateEndpoints.DataMongodbatlasEncryptionAtRestPrivateEndpointsResultsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-mongodbatlas.dataMongodbatlasEncryptionAtRestPrivateEndpoints.DataMongodbatlasEncryptionAtRestPrivateEndpointsResultsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-mongodbatlas.dataMongodbatlasEncryptionAtRestPrivateEndpoints.DataMongodbatlasEncryptionAtRestPrivateEndpointsResultsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasEncryptionAtRestPrivateEndpoints.DataMongodbatlasEncryptionAtRestPrivateEndpointsResultsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasEncryptionAtRestPrivateEndpoints.DataMongodbatlasEncryptionAtRestPrivateEndpointsResultsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasEncryptionAtRestPrivateEndpoints.DataMongodbatlasEncryptionAtRestPrivateEndpointsResultsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasEncryptionAtRestPrivateEndpoints.DataMongodbatlasEncryptionAtRestPrivateEndpointsResultsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasEncryptionAtRestPrivateEndpoints.DataMongodbatlasEncryptionAtRestPrivateEndpointsResultsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasEncryptionAtRestPrivateEndpoints.DataMongodbatlasEncryptionAtRestPrivateEndpointsResultsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasEncryptionAtRestPrivateEndpoints.DataMongodbatlasEncryptionAtRestPrivateEndpointsResultsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasEncryptionAtRestPrivateEndpoints.DataMongodbatlasEncryptionAtRestPrivateEndpointsResultsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasEncryptionAtRestPrivateEndpoints.DataMongodbatlasEncryptionAtRestPrivateEndpointsResultsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasEncryptionAtRestPrivateEndpoints.DataMongodbatlasEncryptionAtRestPrivateEndpointsResultsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasEncryptionAtRestPrivateEndpoints.DataMongodbatlasEncryptionAtRestPrivateEndpointsResultsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasEncryptionAtRestPrivateEndpoints.DataMongodbatlasEncryptionAtRestPrivateEndpointsResultsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasEncryptionAtRestPrivateEndpoints.DataMongodbatlasEncryptionAtRestPrivateEndpointsResultsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-mongodbatlas.dataMongodbatlasEncryptionAtRestPrivateEndpoints.DataMongodbatlasEncryptionAtRestPrivateEndpointsResultsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasEncryptionAtRestPrivateEndpoints.DataMongodbatlasEncryptionAtRestPrivateEndpointsResultsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasEncryptionAtRestPrivateEndpoints.DataMongodbatlasEncryptionAtRestPrivateEndpointsResultsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasEncryptionAtRestPrivateEndpoints.DataMongodbatlasEncryptionAtRestPrivateEndpointsResultsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasEncryptionAtRestPrivateEndpoints.DataMongodbatlasEncryptionAtRestPrivateEndpointsResultsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasEncryptionAtRestPrivateEndpoints.DataMongodbatlasEncryptionAtRestPrivateEndpointsResultsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasEncryptionAtRestPrivateEndpoints.DataMongodbatlasEncryptionAtRestPrivateEndpointsResultsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasEncryptionAtRestPrivateEndpoints.DataMongodbatlasEncryptionAtRestPrivateEndpointsResultsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasEncryptionAtRestPrivateEndpoints.DataMongodbatlasEncryptionAtRestPrivateEndpointsResultsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasEncryptionAtRestPrivateEndpoints.DataMongodbatlasEncryptionAtRestPrivateEndpointsResultsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasEncryptionAtRestPrivateEndpoints.DataMongodbatlasEncryptionAtRestPrivateEndpointsResultsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasEncryptionAtRestPrivateEndpoints.DataMongodbatlasEncryptionAtRestPrivateEndpointsResultsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasEncryptionAtRestPrivateEndpoints.DataMongodbatlasEncryptionAtRestPrivateEndpointsResultsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasEncryptionAtRestPrivateEndpoints.DataMongodbatlasEncryptionAtRestPrivateEndpointsResultsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasEncryptionAtRestPrivateEndpoints.DataMongodbatlasEncryptionAtRestPrivateEndpointsResultsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasEncryptionAtRestPrivateEndpoints.DataMongodbatlasEncryptionAtRestPrivateEndpointsResultsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasEncryptionAtRestPrivateEndpoints.DataMongodbatlasEncryptionAtRestPrivateEndpointsResultsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasEncryptionAtRestPrivateEndpoints.DataMongodbatlasEncryptionAtRestPrivateEndpointsResultsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasEncryptionAtRestPrivateEndpoints.DataMongodbatlasEncryptionAtRestPrivateEndpointsResultsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasEncryptionAtRestPrivateEndpoints.DataMongodbatlasEncryptionAtRestPrivateEndpointsResultsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-mongodbatlas.dataMongodbatlasEncryptionAtRestPrivateEndpoints.DataMongodbatlasEncryptionAtRestPrivateEndpointsResultsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-mongodbatlas.dataMongodbatlasEncryptionAtRestPrivateEndpoints.DataMongodbatlasEncryptionAtRestPrivateEndpointsResultsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-mongodbatlas.dataMongodbatlasEncryptionAtRestPrivateEndpoints.DataMongodbatlasEncryptionAtRestPrivateEndpointsResultsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-mongodbatlas.dataMongodbatlasEncryptionAtRestPrivateEndpoints.DataMongodbatlasEncryptionAtRestPrivateEndpointsResultsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasEncryptionAtRestPrivateEndpoints.DataMongodbatlasEncryptionAtRestPrivateEndpointsResultsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasEncryptionAtRestPrivateEndpoints.DataMongodbatlasEncryptionAtRestPrivateEndpointsResultsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasEncryptionAtRestPrivateEndpoints.DataMongodbatlasEncryptionAtRestPrivateEndpointsResultsOutputReference.property.cloudProvider">cloud_provider</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasEncryptionAtRestPrivateEndpoints.DataMongodbatlasEncryptionAtRestPrivateEndpointsResultsOutputReference.property.errorMessage">error_message</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasEncryptionAtRestPrivateEndpoints.DataMongodbatlasEncryptionAtRestPrivateEndpointsResultsOutputReference.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasEncryptionAtRestPrivateEndpoints.DataMongodbatlasEncryptionAtRestPrivateEndpointsResultsOutputReference.property.privateEndpointConnectionName">private_endpoint_connection_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasEncryptionAtRestPrivateEndpoints.DataMongodbatlasEncryptionAtRestPrivateEndpointsResultsOutputReference.property.projectId">project_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasEncryptionAtRestPrivateEndpoints.DataMongodbatlasEncryptionAtRestPrivateEndpointsResultsOutputReference.property.regionName">region_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasEncryptionAtRestPrivateEndpoints.DataMongodbatlasEncryptionAtRestPrivateEndpointsResultsOutputReference.property.status">status</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasEncryptionAtRestPrivateEndpoints.DataMongodbatlasEncryptionAtRestPrivateEndpointsResultsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasEncryptionAtRestPrivateEndpoints.DataMongodbatlasEncryptionAtRestPrivateEndpointsResults">DataMongodbatlasEncryptionAtRestPrivateEndpointsResults</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-mongodbatlas.dataMongodbatlasEncryptionAtRestPrivateEndpoints.DataMongodbatlasEncryptionAtRestPrivateEndpointsResultsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-mongodbatlas.dataMongodbatlasEncryptionAtRestPrivateEndpoints.DataMongodbatlasEncryptionAtRestPrivateEndpointsResultsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `cloud_provider`<sup>Required</sup> <a name="cloud_provider" id="@cdktf/provider-mongodbatlas.dataMongodbatlasEncryptionAtRestPrivateEndpoints.DataMongodbatlasEncryptionAtRestPrivateEndpointsResultsOutputReference.property.cloudProvider"></a>

```python
cloud_provider: str
```

- *Type:* str

---

##### `error_message`<sup>Required</sup> <a name="error_message" id="@cdktf/provider-mongodbatlas.dataMongodbatlasEncryptionAtRestPrivateEndpoints.DataMongodbatlasEncryptionAtRestPrivateEndpointsResultsOutputReference.property.errorMessage"></a>

```python
error_message: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-mongodbatlas.dataMongodbatlasEncryptionAtRestPrivateEndpoints.DataMongodbatlasEncryptionAtRestPrivateEndpointsResultsOutputReference.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `private_endpoint_connection_name`<sup>Required</sup> <a name="private_endpoint_connection_name" id="@cdktf/provider-mongodbatlas.dataMongodbatlasEncryptionAtRestPrivateEndpoints.DataMongodbatlasEncryptionAtRestPrivateEndpointsResultsOutputReference.property.privateEndpointConnectionName"></a>

```python
private_endpoint_connection_name: str
```

- *Type:* str

---

##### `project_id`<sup>Required</sup> <a name="project_id" id="@cdktf/provider-mongodbatlas.dataMongodbatlasEncryptionAtRestPrivateEndpoints.DataMongodbatlasEncryptionAtRestPrivateEndpointsResultsOutputReference.property.projectId"></a>

```python
project_id: str
```

- *Type:* str

---

##### `region_name`<sup>Required</sup> <a name="region_name" id="@cdktf/provider-mongodbatlas.dataMongodbatlasEncryptionAtRestPrivateEndpoints.DataMongodbatlasEncryptionAtRestPrivateEndpointsResultsOutputReference.property.regionName"></a>

```python
region_name: str
```

- *Type:* str

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktf/provider-mongodbatlas.dataMongodbatlasEncryptionAtRestPrivateEndpoints.DataMongodbatlasEncryptionAtRestPrivateEndpointsResultsOutputReference.property.status"></a>

```python
status: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-mongodbatlas.dataMongodbatlasEncryptionAtRestPrivateEndpoints.DataMongodbatlasEncryptionAtRestPrivateEndpointsResultsOutputReference.property.internalValue"></a>

```python
internal_value: DataMongodbatlasEncryptionAtRestPrivateEndpointsResults
```

- *Type:* <a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasEncryptionAtRestPrivateEndpoints.DataMongodbatlasEncryptionAtRestPrivateEndpointsResults">DataMongodbatlasEncryptionAtRestPrivateEndpointsResults</a>

---



